import { IBlogPost } from "../types/blog";

export const mockBlogPosts: IBlogPost[] = [
  {
    title: "First",
    slug: "first",
    date: new Date().toLocaleString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor neque eget fringilla ornare. Mauris non erat varius, porttitor nunc at, fermentum sem. Nulla sed sem efficitur, venenatis augue a, dapibus metus. Suspendisse gravida volutpat augue sit amet lacinia. Nullam lacinia est quis urna porta, sit amet pulvinar felis condimentum. Fusce sodales lorem ac mattis pellentesque. In dui lacus, efficitur ut sapien nec, bibendum maximus libero. Curabitur non pulvinar lectus. Nulla sit amet nibh nec mauris interdum venenatis. Duis vel est eros. Duis eget nibh nisl. Quisque et diam vel nulla tempor tempus eu sed neque. Nam cursus porta consequat. Duis neque arcu, consequat at justo id, maximus tempus tellus. Aenean sed justo metus. Vestibulum vitae felis tortor. Pellentesque scelerisque sed nisl at ultrices. Sed euismod ultricies malesuada. Etiam sed felis eu lorem condimentum ultricies posuere et massa. Suspendisse varius ligula vel tempor rutrum. Morbi pellentesque aliquet sapien id tempus. Proin sodales laoreet venenatis. Morbi sagittis erat sit amet massa suscipit venenatis. Integer libero mi, sodales nec sem eget, mattis consectetur magna. Morbi eros neque, rutrum ac orci sit amet, vulputate laoreet tellus.`,
  },
  {
    title: "Second",
    slug: "second",
    date: new Date().toLocaleString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor neque eget fringilla ornare. Mauris non erat varius, porttitor nunc at, fermentum sem. Nulla sed sem efficitur, venenatis augue a, dapibus metus. Suspendisse gravida volutpat augue sit amet lacinia. Nullam lacinia est quis urna porta, sit amet pulvinar felis condimentum. Fusce sodales lorem ac mattis pellentesque. In dui lacus, efficitur ut sapien nec, bibendum maximus libero. Curabitur non pulvinar lectus. Nulla sit amet nibh nec mauris interdum venenatis. Duis vel est eros. Duis eget nibh nisl. Quisque et diam vel nulla tempor tempus eu sed neque. Nam cursus porta consequat. Duis neque arcu, consequat at justo id, maximus tempus tellus. Aenean sed justo metus. Vestibulum vitae felis tortor. Pellentesque scelerisque sed nisl at ultrices. Sed euismod ultricies malesuada. Etiam sed felis eu lorem condimentum ultricies posuere et massa. Suspendisse varius ligula vel tempor rutrum. Morbi pellentesque aliquet sapien id tempus. Proin sodales laoreet venenatis. Morbi sagittis erat sit amet massa suscipit venenatis. Integer libero mi, sodales nec sem eget, mattis consectetur magna. Morbi eros neque, rutrum ac orci sit amet, vulputate laoreet tellus.`,
  },
  {
    title: "Third",
    slug: "third",
    date: new Date().toLocaleString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor neque eget fringilla ornare. Mauris non erat varius, porttitor nunc at, fermentum sem. Nulla sed sem efficitur, venenatis augue a, dapibus metus. Suspendisse gravida volutpat augue sit amet lacinia. Nullam lacinia est quis urna porta, sit amet pulvinar felis condimentum. Fusce sodales lorem ac mattis pellentesque. In dui lacus, efficitur ut sapien nec, bibendum maximus libero. Curabitur non pulvinar lectus. Nulla sit amet nibh nec mauris interdum venenatis. Duis vel est eros. Duis eget nibh nisl. Quisque et diam vel nulla tempor tempus eu sed neque. Nam cursus porta consequat. Duis neque arcu, consequat at justo id, maximus tempus tellus. Aenean sed justo metus. Vestibulum vitae felis tortor. Pellentesque scelerisque sed nisl at ultrices. Sed euismod ultricies malesuada. Etiam sed felis eu lorem condimentum ultricies posuere et massa. Suspendisse varius ligula vel tempor rutrum. Morbi pellentesque aliquet sapien id tempus. Proin sodales laoreet venenatis. Morbi sagittis erat sit amet massa suscipit venenatis. Integer libero mi, sodales nec sem eget, mattis consectetur magna. Morbi eros neque, rutrum ac orci sit amet, vulputate laoreet tellus.`,
    tags: ["tailwind", "react", "next.js"],
  },
];
