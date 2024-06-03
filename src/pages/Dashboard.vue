<template>
  
  <v-container fluid>
    <v-row no-gutters>
      <v-col v-for="(card, index) in cards" :key="index" cols="9" sm="3">
        <div class="divtest">
          <v-card
            class="maincards pa-2"
            :title="card.title"
            :subtitle="card.subtitle"
            :text="card.text"
          ></v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
</template>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
export default {
  data() {
    return {
      cards: [
        { title: "Card 1", subtitle: "Subtitle 1", text: "Text 1" },
        { title: "Card 2", subtitle: "Subtitle 2", text: "Text 2" },
        { title: "Card 3", subtitle: "Subtitle 3", text: "Text 3" },
      ],
    };
  },
  components: { NavDrawer },
};
</script>

<style>
.maincards {
  min-width: 300px;
}
.divtest {
  display: flex;
  justify-content: space-evenly;
}
</style>
