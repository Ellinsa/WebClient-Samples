
import { HyperComments } from "./Controls/HyperComments/HyperComments";
import { extensionManager } from "@docsvision/webclient/System/ExtensionManager";

// Данный файл является входной точкой для сборки расширения.
// Он должен прямо или косвенно импортировать все другие файлы скриптов.

// Регистрируем расширение и все его элементы
extensionManager.registerExtension({
    name: "HyperComments",
    version: "5.5.12",
    controls: [{ controlTypeName: "HyperComments", constructor: HyperComments }]
});
