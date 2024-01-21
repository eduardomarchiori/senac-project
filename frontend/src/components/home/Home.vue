<template>
  <div class="info">
    <h2>Cursos Inovadores</h2>

    <div class="filter">
      <div class="filter-items">
        <input-text
          v-model="search"
          class="input-filter"
          placeholder="Pesquise pelo nome"
        />
        <app-button theme="secondary" text="LIMPAR" />
      </div>
    </div>

    <div class="card-content">
      <div v-if="filteredCourses.length" class="card-items">
        <card
          v-for="course in filteredCourses"
          :key="course.id"
          @click="(e) => goToDetails(course.id)"
          :title="course.name"
          :info="getCoordinadorText(course.coordinador)"
          :bannerLink="course.bannerLink"
        />
      </div>
      <div v-else class="no-card-items">
        <span>Nenhum curso foi encontrado</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../common/Button.vue";
import InputText from "../common/InputText.vue";
import Card from "../common/Card.vue";
import * as courseService from "../../service/course/courseService";
import { useRouter } from "vue-router";
import { onMounted, computed, ref } from "vue";

const router = useRouter();
const search = ref("");
const courses = ref([]);

const filteredCourses = computed(() => {
  return courses.value.filter((course) => course.name.includes(search.value));
});

const goToDetails = (id) => {
  router.push(`/details/${id}`);
};

const getCoordinadorText = (name) => `Cordenador: ${name}`;

const getCoureses = async () => {
  try {
    const { data } = await courseService.get();
    courses.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getCoureses();
});
</script>

<style scoped>
.info {
  padding: 12px;
  background-color: #edf0f2;
  height: 100%;
}

.filter {
  display: flex;
  margin: 30px 0;
  justify-content: center;
}

.filter-items {
  display: flex;
  width: 70%;
  gap: 0.25rem;
}

.card-content {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 24px 0;
}

.card-items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  width: 70%;
}

.input-filter {
  flex: 1;
  width: 50%;
}

h2 {
  text-align: center;
  margin-top: 48px;
}
</style>
