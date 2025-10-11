### Before You Begin

For the best experience:

- Install **VS Code** → [Download](https://code.visualstudio.com/Download)
- Built with **React + Tailwind CSS**

---

### Getting Started

1. Install **Node.js** → [nodejs.org](https://nodejs.org/)
2. Open project and run:

   ```bash
   cd siteportal
   npm install
   npm run dev
   ```

Visit: [http://localhost:5173](http://localhost:5173)

---

### Making Changes

- Edit files in `src/` → auto reloads.
- `public/` = static assets:
  - **Icons** → favicon, iOS, PWA, Safari tab
  - **Images** → put in `public/images/` (jpg/png/avif, \~800x600 or 16:9)

---

### Building for Deployment

```bash
npm run build
```

- Output in **`dist/`**

---

### Server Config

- Apache → use `.htaccess`
- Nginx → use `siteportal.nginx`

---

### Deployment

Upload **`dist/`** to your server.

---

### Troubleshooting

If you encounter issues:

- Make sure you’re in the correct folder (`cd siteportal`)
- Restart VS Code
- Check Node.js is installed:

  ```bash
  node --version
  ```

- If packages fail: delete `node_modules` and run:

  ```bash
  npm install
  ```

---

### Notes

- On web servers: create an `.htaccess` file (Apache).
- On VPS: configure Nginx to route requests to `index.html`.

---

### Need Additional Help?

Discord: [https://26bz.online/discord](https://26bz.online/discord)
