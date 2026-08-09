"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <section className="mt-12 border-t border-secondary-foreground/10 pt-8">
      <Giscus
        repo="emmanuelotoo/emmanuelotoo.github.io"
        repoId="R_kgDOPZCvlA"
        category="General"
        categoryId="DIC_kwDOPZCvlM4C6C8f"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_tritanopia"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
