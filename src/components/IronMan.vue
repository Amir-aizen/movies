<template>
  <!--image and button container-->
  <div class="iron-man">
    <div class="item-container" v-for="movie in getIronMan" :key="movie.id">
      <img class="item-image" :src="movie.imagePath" />
      <a class="item-link" :href="movie.link" target="_blank">watch online</a>
    </div>
    <div>
      <!-- information about each movie-->
      <div class="bounce">
        <p>{{ $t("ipusm") }}</p>
        <p>{{ $t("inform") }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getIronMan"])
  }
};
</script>

<!--translations-->
<i18n>
{
    "en":{
        "ipusm": "Lorem ipsum dolor sit amet, at omittam fastidii per, ne vis aeque efficiendi. Nominavi vulputate sit an. Sed ut natum iriure qualisque. Ut quas scripta eleifend usu. Eu vis nostro feugait.",
        "inform": "Mel et nullam adolescens, no vix mucius pertinax, minim decore forensibus at vis. Prompta detracto indoctum usu ne, ei posse nemore eam. Est at veri movet theophrastus. An pro debitis quaestio quaerendum, vide harum mel id, aeque deseruisse te vis. Vel congue lucilius definitiones ne"
    },
    "ar":{
        "ipusm": "ثم بعض الشتاء المؤلّفة. قائمة التكاليف و إيو, عجّل وبالرغم ٣٠ لان, من عدد ٢٠٠٤ ليبين استدعى. عدم الذود اليها المارق ثم. في شعار السادس دون, وإقامة التكاليف المؤلّفة بحق عل, أخذ بأيدي مكثّفة جزيرتي ثم. ما ببعض قدما الإمداد الا استدعى بمحاولة في كلّ. استدعى الساحة لم به",
        "inform": "لحرة يتمكن حين أي قد أحدث الساحة مكن جهة بلديهما الصعداء وبالتحديد، ٣٠. أخر ودول معارضة في, بـ بال يتمكن التقليدي. فقد للصين العسكري الدّفاع عن ٣٠ أخذ وتنصيب اتفاقية الخاسرة. مع عدم المتحدة ايطال في جهة أخرى إجلاء الآخر ثم يعادل المدن يبق. من مما مسرح الستار واستمرت أخر وجهان بالإنزال وبريطانيا"
    }
}
</i18n>
