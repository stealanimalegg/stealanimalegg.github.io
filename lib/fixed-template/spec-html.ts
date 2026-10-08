/** Shared styling for the dark and gold guidebook. */
export const GUIDEBOOK_CSS = `
body[data-fixed-template="guidebook"]{background:#15140f;color:#ede6cd;font-family:Inter,Arial,sans-serif;background-image:radial-gradient(circle at 70% 0,#c8ae5814,transparent 32%)}
.guide-wrap{width:min(1180px,calc(100% - 40px));margin-inline:auto;min-width:0}
.guide-header{border-bottom:1px solid #665a38;background:#10100c}
.guide-header-row{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.guide-brand{display:flex;align-items:center;gap:10px;color:#ead895;font-weight:700;font-size:15px;flex-shrink:0}
.guide-brand img{width:38px;height:38px;border-radius:8px}
.guide-nav{display:flex;gap:2px;flex-wrap:wrap}
.guide-nav a{padding:14px 10px;font-size:13px;color:#d4c9a6;min-height:44px;display:flex;align-items:center}
.guide-nav a:hover,.guide-nav a[aria-current="page"]{color:#f4e4a8;box-shadow:inset 0 -2px #c8ae58}
.guide-menu{display:none}
.guide-hero{padding:30px 0;display:grid;grid-template-columns:1.45fr .65fr;gap:36px;align-items:center}
.guide-hero h1,.guide-article h1{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;color:#ead895;font-size:clamp(38px,4.2vw,58px);line-height:1.06;letter-spacing:-.02em;margin:10px 0 16px}
.guide-hero p,.guide-article p,.guide-article li{color:#cfc6ac;line-height:1.85}
.guide-cover{width:100%;height:auto;border:1px solid #665a38;border-radius:10px}
.guide-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.guide-actions a{border:1px solid #8b783f;padding:11px 15px;border-radius:5px;color:#ead895;font-weight:600;font-size:13px;min-height:44px}
.guide-actions a:first-child{background:#c8ae58;color:#15140f}
.guide-content-grid{display:grid;grid-template-columns:215px minmax(0,1fr);gap:32px;padding:25px 0 55px;border-top:1px solid #4c432c}
.guide-toc{height:max-content;position:sticky;top:20px;border:1px solid #4c432c;padding:18px;background:#10120e}
.guide-toc p{font-weight:600;color:#ead895;margin-bottom:12px}
.guide-toc a{display:block;font-size:12px;line-height:1.5;padding:8px 0;color:#c0b48e}
.guide-toc-disclosure{display:none}
.guide-article{min-width:0}
.guide-article h2{font-family:'Cormorant Garamond',Georgia,serif;color:#e2cf91;font-size:34px;font-weight:600;line-height:1.15;letter-spacing:-.01em}
.guide-article h3{color:#e5d7ac;font-family:Inter,Arial,sans-serif;font-size:17px;font-weight:600;line-height:1.5;margin-top:20px}
.guide-section{margin-bottom:38px;scroll-margin-top:20px}
.guide-section p{margin:12px 0}
.guide-section ul{list-style:disc;padding-left:24px}
.guide-steps{list-style:decimal;padding-left:25px;margin:16px 0}
.guide-steps li{padding-left:6px;margin:13px 0}
.guide-steps h3{display:inline;font-size:16px}
.guide-steps p{margin-top:4px}
.guide-links{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:20px}
.guide-link{display:block;border:1px solid #51482f;background:#1c1b14;padding:16px;border-radius:5px;line-height:1.7;color:#e5d7ac}
.guide-link:hover{border-color:#c8ae58}
.guide-link strong{display:block;color:#ead895}
.guide-link span{display:block;color:#bdb499;font-size:13px;margin-top:5px}
.guide-table-wrap{max-width:100%;overflow-x:auto;border:1px solid #51482f;border-radius:5px;margin:18px 0}
.guide-table-wrap:focus-visible{outline:2px solid #ead895}
.guide-table{border-collapse:collapse;width:100%;font-size:14px;line-height:1.65}
.guide-table caption{text-align:left;padding:12px 15px;background:#242218;color:#ead895;font-weight:600}
.guide-table th,.guide-table td{padding:12px 15px;text-align:left;border-top:1px solid #51482f;vertical-align:top;min-width:120px}
.guide-table th{color:#ead895;background:#1e1d15}
.guide-table td{color:#cfc6ac}
.guide-faq article{border-bottom:1px solid #4c432c;padding:8px 0 18px}
.guide-crumbs{display:flex;flex-wrap:wrap;gap:9px;font-size:13px;color:#bdb499;padding:24px 0 16px}
.guide-crumbs a{color:#ead895}
.guide-date{font-size:12px!important;color:#bdb499!important;margin:12px 0 20px!important}
.guide-footer{border-top:1px solid #665a38;background:#10100c;padding:38px 0}
.guide-footer-grid{display:grid;grid-template-columns:1.5fr 1fr .8fr;gap:30px}
.guide-footer p{font-size:13px;line-height:1.8;color:#bdb499;margin:10px 0}
.guide-footer strong{color:#ead895}
.guide-footer ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px 14px;margin-top:12px}
.guide-footer a{color:#cfc6ac;font-size:13px;display:inline-flex;align-items:center;min-height:44px}
.guide-screenshots img{max-width:100%;height:auto}
.guide-screenshots figcaption{font-size:13px;line-height:1.7;color:#bdb499;margin:10px 0 26px}
.guide-source{font-size:13px}
.guide-source a{color:#ead895;text-decoration:underline;text-underline-offset:3px}
body[data-fixed-template="guidebook"] a:focus-visible,body[data-fixed-template="guidebook"] summary:focus-visible{outline:2px solid #ead895;outline-offset:4px}
@media(max-width:1000px){.guide-nav a{padding-inline:7px;font-size:12px}.guide-brand{max-width:200px}}
@media(max-width:820px){.guide-wrap{width:calc(100% - 32px)}.guide-desktop-nav{display:none}.guide-header-row{min-height:68px;flex-wrap:wrap;padding:12px 0;gap:12px}.guide-brand{max-width:none;font-size:14px}.guide-menu{display:block;margin-left:auto}.guide-menu summary{list-style:none;cursor:pointer;padding:10px 14px;border:1px solid #665a38;border-radius:5px;color:#ead895;font-size:14px;min-height:44px}.guide-menu[open]{width:100%}.guide-menu[open] summary{width:max-content;margin-left:auto}.guide-menu .guide-nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding:12px 0}.guide-hero{grid-template-columns:1fr;padding:22px 0;gap:22px}.guide-hero .guide-cover{display:block;max-width:768px;margin-inline:auto}.guide-content-grid{grid-template-columns:1fr;gap:24px;padding-top:20px}.guide-toc{position:static}.guide-toc nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 14px}.guide-toc a{min-height:44px}.guide-footer-grid{grid-template-columns:1fr}.guide-article h2{font-size:30px}.guide-article h1{font-size:40px}}
@media(min-width:451px) and (max-width:820px){.guide-toc{padding:0;border:0;background:none}.guide-toc>p,.guide-toc>nav{display:none}.guide-toc-disclosure{display:block}.guide-toc-disclosure summary{cursor:pointer;min-height:44px;padding:10px 14px;border:1px solid #4c432c;color:#ead895;background:#10120e;font-size:13px}.guide-toc-disclosure nav{padding:12px 14px;border:1px solid #4c432c;border-top:0;background:#10120e}}
@media(max-width:450px){.guide-links{grid-template-columns:1fr}.guide-toc nav{grid-template-columns:1fr}.guide-toc{display:none}.guide-actions a{padding:11px 12px}.guide-table{font-size:13px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;
