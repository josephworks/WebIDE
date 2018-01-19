/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcess/sharedProcessMain.nls.zh-tw", {
  "vs/base/common/severity": ["錯誤", "警告", "資訊"],
  "vs/base/node/zip": ["在 ZIP 中找不到 {0}。"],
  "vs/platform/configuration/common/configurationRegistry": ["預設組態覆寫", "設定要針對 {0} 語言覆寫的編輯器設定。", "設定要針對語言覆寫的編輯器設定。", "無法註冊 '{0}'。這符合用於描述語言專用編輯器設定的屬性模式 '\\\\[.*\\\\]$'。請使用 'configurationDefaults' 貢獻。", "無法註冊 '{0}'。此屬性已經註冊。"],
  "vs/platform/extensionManagement/common/extensionManagement": ["延伸模組", "喜好設定"],
  "vs/platform/extensionManagement/node/extensionGalleryService": ["無法安裝，因為找不到相容於 VS Code 目前版本 '{0}' 的擴充功能。"],
  "vs/platform/extensionManagement/node/extensionManagementService": ["擴充功能無效: package.json 不是 JSON 檔案。", "Please restart Code before reinstalling {0}.", "已安裝此擴充功能的較新版本。是否要使用舊版本覆蓋此項？", "覆寫", "取消", "Error while installing dependencies. {0}", "無法安裝，因為找不到相容於 VS Code 目前版本 '{1}' 的擴充功能 '{0}'。", "無法安裝，因為找不到相容於 VS Code 目前版本 '{1}' 的相依擴充功能 '{0}'。", "無法安裝因為有過時的擴充功能仍在運行。請在重新安裝前退出並啟動 VS Code。", "無法安裝因為有過時的擴充功能仍在運行。請在重新安裝前退出並啟動 VS Code。", "只要將 '{0}' 解除安裝，或要包含其相依性?", "只有", "全部", "取消", "確定要將 '{0}' 解除安裝嗎?", "確定", "取消", "無法將延伸模組 '{0}' 解除安裝。其為延伸模組 '{1}' 的相依對象。", "無法將延伸模組 '{0}' 解除安裝。其為延伸模組 '{1}' 及 '{2}' 的相依對象。", "無法將延伸模組 '{0}' 解除安裝。其為 '{1}'、'{2}' 及其他延伸模組的相依對象。", "找不到擴充功能"],
  "vs/platform/extensions/node/extensionValidator": ["無法剖析 'engines.vscode` 值 {0}。例如，請使用：^0.10.0、^1.2.3、^0.11.0、^0.10.x 等。", "在 `engines.vscode` ({0}) 中指定的版本不夠具體。對於 1.0.0 之前的 vscode 版本，請至少定義所需的主要和次要版本。 例如 ^0.10.0、0.10.x、0.11.0 等。", "在 `engines.vscode` ({0}) 中指定的版本不夠具體。對於 1.0.0 之後的 vscode 版本，請至少定義所需的主要和次要版本。 例如 ^1.10.0、1.10.x、1.x.x、2.x.x 等。", "擴充功能與 Code {0} 不相容。擴充功能需要: {1}。", "得到空白擴充功能描述", "屬性 '{0}' 為強制項目且必須屬於 `string` 類型", "屬性 '{0}' 為強制項目且必須屬於 `string` 類型", "屬性 '{0}' 為強制項目且必須屬於 `string` 類型", "屬性 '{0}' 為強制項目且必須屬於 `object` 類型", "屬性 '{0}' 為強制項目且必須屬於 `string` 類型", "屬性 `{0}` 可以省略或必須屬於 `string[]` 類型", "屬性 `{0}` 可以省略或必須屬於 `string[]` 類型", "屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略", "屬性 `{0}` 可以省略或必須屬於 `string` 類型", "`main` ({0}) 必須包含在擴充功能的資料夾 ({1}) 中。這可能會使擴充功能無法移植。", "屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略", "擴充功能版本與 semver 不相容。"],
  "vs/platform/message/common/message": ["關閉", "稍後", "取消", "...1 additional file not shown", "...{0} additional files not shown"],
  "vs/platform/request/node/request": ["HTTP", "要使用的 Proxy 設定。如果未設定，會從 http_proxy 與 https_proxy 環境變數取得設定。", "是否應該針對提供的 CA 清單驗證 Proxy 伺服器憑證。", "要傳送作為每個網路要求 'Proxy-Authorization' 標頭的值。"],
  "vs/platform/telemetry/common/telemetryService": ["遙測", "允許將使用狀況資料和錯誤傳送給 Microsoft。"]
});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\code\electron-browser\sharedProcess\sharedProcessMain.nls.zh-tw.js.map