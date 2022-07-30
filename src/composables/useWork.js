import axios from 'axios';
import { ref } from 'vue';

export default (workId) => {
  const work = ref('');
  const fetchWork = async () => {
    try {
      const res = await axios.get(
        process.env.VUE_APP_MICROCMS_API_URL + '/works/' + workId.value,
        {
          headers: {
            'X-MICROCMS-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY,
          },
        }
      );
      work.value = res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    work,
    fetchWork,
  };
};
