# A Casa dos Caretas — Web

Sitio web estático del gastrobar A Casa dos Caretas (ACDC), San Cristovo de Cea, Ourense.

## Despliegue en GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos minutos estará disponible en `https://<usuario>.github.io/<repo>/`.
5. El archivo `CNAME` apunta el dominio personalizado a `acasadoscaretas.com`.

### Dominio personalizado

En tu registrador de dominios (`.com` y `.es`), configura:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<usuario>.github.io` |

En GitHub → Settings → Pages → Custom domain, introduce `acasadoscaretas.com` y activa **Enforce HTTPS**.

Para el dominio `.es`, repite los mismos registros DNS o redirígelo al `.com`.

## Estructura

```
├── index.html          # Página principal
├── css/style.css       # Estilos
├── js/main.js          # Navegación, tabs carta, lightbox
├── img/                # Logo y carta (c1–c7.avif)
├── assets/photos/      # Fotos del local
└── CNAME               # Dominio personalizado
```

## Desarrollo local

Abre `index.html` en el navegador o usa un servidor local:

```bash
python3 -m http.server 8080
```

Visita `http://localhost:8080`.
