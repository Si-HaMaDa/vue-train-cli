<template>
  <div class="team">
    <h1>{{ teamName }}</h1>
    <ul>
      <li v-for="member in members" :key="member">{{ member }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Team",
  data: function () {
    return {
      teamName: "Tech Team",
      members: ["mohamed", "Ahmed", "Mahmoud"],
    };
  },
};
</script>
