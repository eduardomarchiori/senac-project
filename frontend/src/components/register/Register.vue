<template>
  <div class="info">
    <h2>Cadastrar Curso</h2>

    <div class="page-content">
      <page class="page">
        <div class="register-from">
          <form>
            <div class="input-content">
              <p>Nome do curso</p>
              <input-text class="input-text" v-model="course" />
            </div>

            <div class="input-content">
              <p>Descrição</p>
              <input-text class="input-text" v-model="description" />
            </div>

            <div class="input-content">
              <p>Nome do cordenador</p>
              <input-text class="input-text" v-model="coordinador" />
            </div>

            <div class="input-content">
              <p>Link do banner</p>
              <input-text class="input-text" v-model="link" />
            </div>

            <app-button @click="createCourse" text="Criar" />
          </form>
        </div>
        <div class="preview">
          <card
            :clickable="false"
            :title="course || undefined"
            :info="coordinadorText || undefined"
            :bannerLink="link || undefined"
          />
        </div>
      </page>
    </div>
  </div>
</template>

<script setup>
import Page from "../common/Page.vue";
import Card from "../common/Card.vue";
import InputText from "../common/InputText.vue";
import AppButton from "../common/Button.vue";
import * as courseService from "../../service/course/courseService";
import { ref, computed } from "vue";

const course = ref("");
const description = ref("");
const coordinador = ref("");
const link = ref("");

const coordinadorText = computed(() => `Coordenador: ${coordinador.value}`);

const createCourse = async () => {
  try {
    await courseService.create({
      name: course.value,
      description: description.value,
      coordinador: coordinador.value,
      bannerLink: link.value,
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.info {
  padding: 12px;
  background-color: #edf0f2;
  height: 100%;
}

.page-content {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.page {
  width: 70%;
}

h2 {
  text-align: center;
  margin-top: 48px;
}

.input-content {
  margin: 12px 0;
}

.image-content {
  width: 100%;
}

.register-from {
  width: 50%;
  border-right: 1px black solid;
  padding: 0px 18px;
}

.preview {
  width: 50%;
  padding: 0px 12px;
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
}

h3 {
  margin: 8px 0;
}

p {
  margin-bottom: 4px;
}

.input-text {
  width: 100%;
  box-sizing: border-box;
}

.card {
  height: 100%;
  width: 50%;
}
</style>
