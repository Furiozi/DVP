# 📦 Package Current Version (PCV)

### 🔍 Check your project's dependencies with ease!

**Package Current Version (PCV)** is a simple CLI tool that scans your project's `package.json`, retrieves the installed versions of dependencies, and compares them with the latest available versions in the npm registry.

## 🚀 Features

- 📄 **Reads** dependencies from `package.json`
- 🔄 **Compares** installed versions with the latest versions in npm
- 🛠 **Easy to use** with a simple CLI command

## 📥 Installation

Clone this repository in your project and navigate to the folder:

```sh
git clone https://github.com/Furiozi/PCV.git
cd PCV
```

## ▶️ Usage

Run the script with Node.js:

```sh
node PCV.js
```

### Example Output:

```
⌛ Checking the current versions of dependencies...

■ ——— (express):
        Current version - ^4.21.2 => 4.21.2@latest

■ ——— (axios):
        Current version - ^1.7.9 => 1.7.9@latest

All dependencies checked! ✔
```

## 📌 Requirements

- **Node.js**

## 📜 License

This project is licensed under the [Apache 2.0 License](LICENSE).

## 👤 Author

Developed by **Furiozi**

## ⭐️ Support

If you find this tool useful, consider giving it a ⭐ on [GitHub](https://github.com/Furiozi/PCV)!
