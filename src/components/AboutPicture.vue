<template>
  <div class="about_picture">
    <div class="overlap-group1-2">
      <div class="x2024-06-14_113758_x-t2_9053-2"></div>
      <img class="me2" :src="src" alt="me2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPicture",
  props: ["src"],
};
</script>

<style>
.about_picture,
.about_picture-1,
.about_picture-2,
.about_picture-3,
.about_picture-4 {
  height: 577.91px;
  position: relative;
  width: 390px;
}

.overlap-group1-2,
.overlap-group1-3,
.overlap-group1-4,
.overlap-group1-5,
.overlap-group1-6 {
  height: 578px;
  position: relative;
}

.x2024-06-14_113758_x-t2_9053-2,
.x2024-06-14_113758_x-t2_9053-2-1,
.x2024-06-14_113758_x-t2_9053-2-2,
.x2024-06-14_113758_x-t2_9053-2-3,
.x2024-06-14_113758_x-t2_9053-2-4 {
  background-color: var(--hippie-blue);
  height: 563px;
  left: 14px;
  position: absolute;
  top: 15px;
  width: 376px;
}

.me2,
.me2-1,
.me2-2,
.me2-3,
.me2-4 {
  height: 563px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 376px;
}
</style>
