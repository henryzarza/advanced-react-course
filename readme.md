# Advanced React & GraphQL

Solution for the [Advanced React & GraphQL](https://AdvancedReact.com) course by [Wes Bos](https://WesBos.com/).

![Advanced React & GraphQL](https://advancedreact.com/images/ARG/arg-facebook-share.png)

## Resources

I decided to do changes to the course's project and add more content and interesting things, I found some links, write downs, and tips that I wanted to share:

- This is the [Figma](https://www.figma.com/file/745rXlzs53wABj0u5LvZ4v/Sick-fits?node-id=0%3A1) design (there are a couple of changes in the final UI that it doesn't be in the Figma design so sorry) I did to improve the UI and UX (I'm not a designer, I'm a mortal and simple developer that love design and creative things).


## Next.JS write downs
<details>
  <summary>Click to expand!</summary>

  ## Pages in Next.js

  - In Next.js, a page is a React Component exported from a file in the [pages directory](https://nextjs.org/docs/basic-features/pages). Pages are associated with a route based on their file name. For example, in development:
    * `pages/index.js` is associated with the / route.
    * `pages/posts/first-post.js` is associated with the `/posts/first-post` route.

  - This is how you can create different pages in Next.js: simply create a JS file under the pages directory, and the path to the file becomes the URL path.

  - Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`

  - Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

**Note**: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.

  - Next.js has two forms of pre-rendering: [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) and [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering). The difference is in when it generates the HTML for a page.
    * **Static Generation** is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
    * **Server-side Rendering** is the pre-rendering method that generates the HTML on each request.

  ### When to Use Static Generation v.s. Server-side Rendering?
  - We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

  - There are three unique Next.js functions you can use to fetch data for pre-rendering:
    * [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) (Static Generation): Fetch data at build time.
    * [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) (Static Generation): Specify dynamic routes to pre-render pages based on data.
    * [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) (Server-side Rendering): Fetch data on each request.

  - **getStaticProps** can only be exported from a page. You can’t export it from non-page files. One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

  ### When should I use getStaticProps?
  You should use getStaticProps if:
 
  - The data required to render the page is available at build time ahead of a user’s request.
  - The data comes from a headless CMS.
  - The data can be publicly cached (not user-specific).
  - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

  ### What If I Need to Fetch Data at Request Time?
  Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
  In cases like this, you can try [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) or skip pre-rendering.
  To use Server-side Rendering, you need to export **getServerSideProps** instead of **getStaticProps** from your page.

  ### Image loading property
  **Attention**: This property is only meant for advanced usage. Switching an image to load with eager will normally hurt performance.
  We recommend using the [priority](https://nextjs.org/docs/api-reference/next/image#priority) property instead, which properly loads the image eagerly for nearly all use cases.
</details>

## React Testing Library
<details>
  <summary>Click to expand!</summary>

  ## Types of Queries
  
  |  **Type of Query**  |  **0 Matches**  |  **1 Match**  |  **>1 Matches**  |  **Retry (Async/Await)**  |
  |---|---|---|---|---|
  | Single Element  |   |   |   |   |
  | getBy... | Throw error | Return element  |  Throw error  | No  |
  | queryBy...	 |  Return null  |  Return element  |  Throw error  |  No  |
  | findBy... |  Throw error  |  Return element  |  Throw error  |  Yes  |
  | Multiple Elements  |   |   |   |   |
  | getAllBy...  |  Throw error  |  Return array  |  Return array  |   No  |
  | queryAllBy...  |  Return []  |  Return array  |  Return array  |  No  |
  | findAllBy...  |  Throw error  |  Return array  |  Return array  |  Yes  |

</details>

## Getting Help

- **Start backend project**: Go to _backend_ folder and run in your terminal `npm run dev`, go to your favorite browser and put `localhost:3000`. Note: You have to configure `.env` file before running the project. This is the structure of this file:

```
CLOUDINARY_CLOUD_NAME=omg
CLOUDINARY_KEY=lol
CLOUDINARY_SECRET=yarite
COOKIE_SECRET="PLEASE CHANGE ME OH PLEASE CHANGE ME"
DATABASE_URL=mongodb://localhost:27017/sick-fits-keystone
STRIPE_SECRET="sk_test_nahhhh"
MAIL_HOST="smtp.ethereal.email"
MAIL_PORT=587
MAIL_USER="get-one-from- http://ethereal.email"
MAIL_PASS="get-one-from- http://ethereal.email"
FRONTEND_URL="http://localhost:7777"
```

- **Start frontend project**: Go to _frontend_ folder and run in your terminal `npm run dev`, go to your favorite browser and put `localhost:7777`

Made with ❤️ by Henry Zarza
