<template>
  <footer>
    <section class="credit section">
      <p v-if="another.used_links" class="icon-credit">
        このサイトの画像には
        <br class="sp-only" />
        <a
          v-for="(link, index) in another.used_links"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener"
          >{{ link.name }}
          <span v-if="index + 1 < another.used_links.length">,&nbsp;</span></a
        >
        <br class="sp-only" />
        を使用させて頂いております
      </p>
    </section>
    <div class="footer">
      <div class="copyright">&copy;SORA ITO. All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script>
import useAnother from '@/composables/useAnother';

export default {
  setup() {
    const { another, fetchAnother } = useAnother();
    fetchAnother();

    return {
      another
    };
  },
};
</script>

<style scoped>
.credit {
  text-align: center;
}

.footer {
  padding: 30px;
  background-color: #333;
}

.copyright {
  font-size: 10px;
  text-align: center;
  color: #797979;
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  .footer {
    padding: 20px;
  }
}
</style>
