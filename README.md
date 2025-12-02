# Blog com Laravel, Inertia e React

Este projeto é um **blog simples** desenvolvido com **Laravel**, **Inertia.js**, **React** e **TailwindCSS**.  
Ele foi criado para fins de estudo, seguindo a estrutura de layouts e páginas sem autenticação.

## 🚀 Tecnologias

- [Laravel](https://laravel.com/) — backend e rotas
- [Inertia.js](https://inertiajs.com/) — ponte entre Laravel e React
- [React](https://react.dev/) — frontend
- [TailwindCSS](https://tailwindcss.com/) — estilização
- [Ziggy](https://github.com/tighten/ziggy) — rotas nomeadas do Laravel no frontend

## 📂 Estrutura de Arquivos
resources/js/<br>
 ├── components/<br>
  │   └── Navigation.tsx<br>
   ├── layouts/ <br>
   │   └── GuestLayout.tsx <br>
   ├── pages/<br>
    │   ├── Home.tsx <br>
    │   ├── About.tsx<br>
     │   └── Posts/ <br>
     │       └── Index.tsx <br>
     routes/ <br>
     └── web.php

     
### 🔗 Navegação
- **Home** (`/`) → Página inicial com título e lista de posts.
- **About** (`/about`) → Página "Sobre" com informações básicas.
- **Posts** (`/posts`) → Recurso RESTful para posts (controlado pelo `PostController`).

### 🖼 Layout
O projeto utiliza um layout chamado **GuestLayout**, que:
- Renderiza o menu de navegação (`Navigation`) no topo da página, alinhado à direita.
- Exibe o conteúdo das páginas dentro de um container centralizado.

## 📌 Componentes principais

### `Navigation.tsx`
Links de navegação:
```tsx
<Link href="/">Home</Link>
<Link href="/about">About</Link>
```

#### GuestLayout.tsx
#### Layout base para páginas públicas:
```tsx
<header className="w-full bg-gray-900 text-white shadow">
  <div className="container mx-auto px-6 py-4 flex justify-end">
    <Navigation />
  </div>
</header>
<main className="flex-1 container mx-auto px-6 py-10">
  {children}
</main>
```

#### Home.tsx
```tsx
<GuestLayout>
  <h1 className="text-xl font-semibold text-center">Welcome to my Blog</h1>
  <Posts />
</GuestLayout>
```

#### About.tsx
```tsx
<GuestLayout>
  <h1 className="text-center font-semibold">About Page</h1>
  <p className="text-center">Welcome to about page!</p>
</GuestLayout>
```

### Como Rodar
1- Clone o repositório:
```tsx
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo'
```

2- Instale dependências do Laravel:
```tsx
composer install
```

3 - Instale dependências do frontend:
```tsx
npm install
```

4 - Configure o .env e rode as migrations
```tsx
php artisan migrate
```

5 - Inicie o servidor:
```tsx
php artisan serve
npm run dev
```

6 - Acesse no navegador:
```tsx
http://localhost:8000
```

## Objetivo
Este projeto foi feito para aprender e praticar a integração entre Laravel, Inertia e React, com foco em layouts e navegação sem autenticação.

## 📜 Licença & Copyright

Copyright © 2025 José Isaias Lourenço & Vetor256.  
Este projeto é distribuído para fins de estudo e aprendizado.  
O uso comercial ou redistribuição deve citar os autores.

---

## 👤 Autor

- [José Isaias Lourenço](https://www.instagram.com/isaiaslourenco3/)  

## 🏢 Parceiro

- [Vetor256](https://vetor256.com)