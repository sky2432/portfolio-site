import axios from 'axios';
import { ref } from 'vue';

export default () => {
  const works = ref([]);
  const fetchWorks = async () => {
    try {
      const res = await axios.get(
        process.env.VUE_APP_MICROCMS_API_URL + '/works',
        {
          headers: {
            'X-MICROCMS-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY,
          },
          params: {
            // デフォルトが10
            // 全て表示したいので大きい値を指定している
            limit: 1000,
          },
        }
      );
      works.value = res.data.contents;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    works,
    fetchWorks,
  };
};
