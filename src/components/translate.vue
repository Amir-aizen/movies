<template>
  <div id="translate">
    <select v-model="$i18n.locale">
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "translate"
};
</script>
