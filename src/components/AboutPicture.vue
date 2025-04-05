<template>
  <div :class="[`about_picture`, className || ``]">
    <div class="overlap-group1-2">
      <div class="x2024-06-14_113758_x-t2_9053-2"></div>
      <img class="me2" :src="src" alt="me2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPicture",
  props: ["src", "className"],
};
</script>

<style>
.about_picture {
  height: 577.91px;
  margin-left: -7.5px;
  margin-right: -7.5px;
  position: relative;
  width: 390px;
}

.overlap-group1-2 {
  height: 578px;
  position: relative;
}

.x2024-06-14_113758_x-t2_9053-2 {
  background-color: var(--hippie-blue);
  height: 563px;
  left: 14px;
  position: absolute;
  top: 15px;
  width: 376px;
}

.me2 {
  height: 563px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 376px;
}

.about_picture.about_picture-1,
.about_picture.about_picture-2,
.about_picture.about_picture-3,
.about_picture.about_picture-4,
.about_picture.about_picture-5,
.about_picture.about_picture-6,
.about_picture.about_picture-7 {
  margin-left: unset;
  margin-right: unset;
}
</style>
