import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "out");
const release = join(root, "release");
const staticOnly = process.argv.includes("--static");
const source = staticOnly ? output : root;
const name = staticOnly ? "steal-animal-egg-site" : "steal-animal-egg-source";
const archive = join(release, `${name}.zip`);
const temporary = join(release, `.${name}-${process.pid}.zip`);
const excludedDirectories = new Set([
  "node_modules", ".next", "out", "release", "output", ".git",
  ".playwright-cli", ".idea", ".vscode",
]);
const allowedHiddenEntries = new Set([
  ".github", ".gitignore", ".gitattributes", ".editorconfig", ".env.example",
  ".prettierrc", ".prettierignore", ".eslintrc.json", ".eslintignore",
  ".browserslistrc", ".nvmrc", ".node-version", ".well-known",
]);

if (staticOnly && !existsSync(join(output, "index.html"))) {
  throw new Error("Static output is missing. Run npm run package to build it first.");
}

function collectFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (!staticOnly && entry.name.startsWith(".") && !allowedHiddenEntries.has(entry.name)) return [];
    if (entry.name === ".DS_Store" || entry.name.endsWith(".tsbuildinfo")
      || entry.name.endsWith(".log")
      || (entry.name.startsWith(".env") && entry.name !== ".env.example")) return [];
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!staticOnly && excludedDirectories.has(entry.name)) return [];
      return collectFiles(path);
    }
    // Do not follow links to files outside the project.
    return entry.isFile() ? [relative(source, path).split(sep).join("/")] : [];
  });
}

const files = collectFiles(source).sort();
const required = staticOnly
  ? ["index.html", ".nojekyll"]
  : ["package.json", "package-lock.json", "next.config.ts", "tsconfig.json", "app/page.tsx", "components/templates/fixed-template-home.tsx", "content/generated/pages.json", "lib/seo.ts", ".github/workflows/deploy.yml"];
for (const file of required) {
  if (!files.includes(file)) throw new Error(`Required package file is missing: ${file}`);
}
if (files.some(file => /[\r\n]/.test(file))) {
  throw new Error("Package filenames cannot contain line breaks.");
}

mkdirSync(release, { recursive: true });
rmSync(temporary, { force: true });
try {
  // An explicit file list includes hidden project files without build artifacts.
  const result = spawnSync("zip", ["-q", temporary, "-@"], {
    cwd: source,
    input: `${files.join("\n")}\n`,
    encoding: "utf8",
    stdio: ["pipe", "inherit", "inherit"],
  });
  if (result.error?.code === "ENOENT") {
    throw new Error("The zip command is required. Install zip and run npm run package again.");
  }
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`ZIP packaging failed (exit ${result.status}).`);

  renameSync(temporary, archive);
  console.log(`${staticOnly ? "Static site" : "Project source"} package ready: release/${name}.zip (${files.length} files, ${(statSync(archive).size / 1024 / 1024).toFixed(2)} MB)`);
} finally {
  rmSync(temporary, { force: true });
}
