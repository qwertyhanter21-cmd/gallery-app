// Простий JSON "движок" для зберігання даних у файлі
// Працює синхронно, бо обсяг даних невеликий

const fs = require("fs");
const path = require("path");

class JsonDatabase {
    constructor() {
        // Шлях до файлу бази
        this.filePath = path.join(__dirname, "gallery.json");

        // Якщо файл не існує — створюємо порожній масив
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify([]));
        }
    }

    // Прочитати всі записи
    getAll() {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }

    // Додати новий запис
    insert(item) {
        const data = this.getAll();
        data.push(item);
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

module.exports = JsonDatabase;
