# 📘 scrap_app API

Cette API permet d'extraire **le nom** et **l'image de profil** depuis un profil Facebook public en utilisant **Puppeteer** et **Express.js**.

---

## 🚀 Fonctionnalités

- Scraping automatisé d'un profil Facebook public
- Extraction de :
  - 🔹 Le nom (balise meta `title`)
  - 🔹 L'image de profil (balise meta `og:image`)
- API REST via Express
## Requet get 

- http://localhost:3000/api/facebook-info?url=https://www.facebook.com/id_facebook/

---

## 📦 Installation

### 1. Clone du projet

```bash
git clone https://github.com/ton-utilisateur/scrap_app.git
cd scrap_app
