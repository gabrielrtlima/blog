"use client";

import { posts } from "@/.velite";
import { PostItem } from "@/components/post-item";
import { siteConfig } from "@/config/site";
import { sortPosts } from "@/lib/utils";
import Typewriter from "typewriter-effect";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-balance">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("<strong>leirbag</strong>")
                  .pauseFor(300)
                  .deleteAll()
                  .typeString("<strong>gabriel</strong>")
                  .start();
              }}
            />
          </h1>
          <p className="max-w-[42rem] mt-2 mx-auto text-muted-foreground sm:text-xl text-balance">
            {siteConfig.description}
          </p>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          latest posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
