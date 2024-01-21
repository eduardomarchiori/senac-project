<template>
  <div class="info">
    <h2>Informações do Curso</h2>

    <div class="page-content">
      <page class="page">
        <div class="image-side">
          <img :src="course.bannerLink" alt="banner" />
        </div>
        <div class="data">
          <h3>{{ course.name }}</h3>
          <p>
            {{ course.description }}
          </p>
          <small><b>Cordenador:</b> {{ course.coordinador }}</small>
          <div class="buttons-content">
            <app-button text="EDITAR" @click="goToEditPage" />
            <app-button theme="secondary" text="EXCLUIR" />
          </div>
        </div>
      </page>
    </div>
  </div>
</template>

<script setup>
import Page from "../common/Page.vue";
import AppButton from "../common/Button.vue";
import * as courseService from "../../service/course/courseService";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const route = useRoute();
const course = ref({});

const goToEditPage = () => {
  router.push({
    path: `/edit/${course.value.id}`,
  });
};

const getCourse = async () => {
  const { id } = route.params;

  try {
    const { data } = await courseService.getOne(id);
    course.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getCourse();
});
</script>

<style scoped>
.info {
  padding: 12px;
  background-color: #edf0f2;
  height: 100%;
}

.buttons-content {
  margin-top: 12px;
  display: flex;
  gap: 0.5rem;
}

h2 {
  text-align: center;
  margin-top: 48px;
}

.page-content {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

img {
  border-radius: 8px;
  width: 100%;
  max-height: 240px;
}

h3 {
  margin-bottom: 12px;
}

p {
  margin-bottom: 8px;
}

.page {
  width: 70%;
}

.image-side {
  width: 50%;
  border-right: 1px black solid;
  padding: 0px 18px;
}

.data {
  width: 50%;
  padding: 0px 18px;
}
</style>
