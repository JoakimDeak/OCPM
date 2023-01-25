function apply_style_sheet_for_current_panel_only() {
  const devtools_custom_css = `.console-view > div[class^="console-warning-" i] { display : none !important ; }`;
  chrome.devtools.panels.applyStyleSheet(devtools_custom_css);
}

apply_style_sheet_for_current_panel_only();
chrome.devtools.panels.elements.onSelectionChanged.addListener(apply_style_sheet_for_current_panel_only);
