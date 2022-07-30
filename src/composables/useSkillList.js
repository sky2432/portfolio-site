import axios from 'axios';
import { ref } from 'vue';

export default () => {
  const skillList = ref([]);
  const fetchSkillList = async () => {
    try {
      const res = await axios.get(
        process.env.VUE_APP_MICROCMS_API_URL + '/skills',
        {
          headers: {
            'X-MICROCMS-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY,
          },
        }
      );
      skillList.value = res.data.contents;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    skillList,
    fetchSkillList,
  };
};
