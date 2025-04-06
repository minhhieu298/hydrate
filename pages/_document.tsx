/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export const emotionCache = createCache({
  key: "mui-style",
  prepend: true,
});

interface EmotionStyle {
  key: string;
  ids: string[];
  css: string;
}

interface EmotionStyles {
  html: string;
  styles: EmotionStyle[];
}

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const { extractCriticalToChunks } = createEmotionServer(emotionCache);

    // Sửa enhanceApp để tương thích với Next.js
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          <App {...props} emotionCache={emotionCache} />,
      });

    const initialProps: any = await Document.getInitialProps(
      ctx
    );
    const emotionStyles: EmotionStyles = extractCriticalToChunks(
      initialProps.html
    );
    const emotionStyleTags = emotionStyles.styles.map((style: EmotionStyle) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...emotionStyleTags],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
