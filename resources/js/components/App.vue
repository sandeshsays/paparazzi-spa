<template>
  <section class="m-16">
    <h1 class="text-5xl font-semibold mb-8">Panels</h1>

    <base-panel class="mb-8">
    Sint dolor ad anim laborum sunt. Eu voluptate voluptate nostrud culpa. Aliquip fugiat reprehenderit incididunt magna. Consequat do velit dolore pariatur officia duis. Elit commodo ut minim consectetur veniam elit deserunt duis nulla cupidatat ex occaecat ad. Et ut ipsum sint elit fugiat commodo officia occaecat consequat fugiat laborum aute id. Ut adipisicing ullamco aute est laborum irure velit adipisicing voluptate est.
    </base-panel>

    <base-panel class="mb-8 flex" noPadding>
    <div class="bg-blue-500 w-64"></div>
    <div class="px-6 py-4 flex-1">
        In elit amet incididunt quis officia nostrud quis voluptate labore dolor id. Cillum sint do nulla ut occaecat reprehenderit culpa. Commodo cillum in fugiat ipsum fugiat enim aliquip id occaecat est excepteur. Commodo esse sint officia cupidatat amet. Proident minim duis esse mollit sunt ullamco officia qui occaecat deserunt.
    </div>
    </base-panel>

    <base-panel class="mb-8" title="My Title" sub="Some metadata">
    Ipsum mollit excepteur nostrud eu. Voluptate ex nulla aute velit officia reprehenderit id ipsum excepteur eu. Ea dolor ullamco ad deserunt.
    </base-panel>

  </section>
</template>

<script>
import BasePanel from "./BasePanel";
export default {
  components: { BasePanel },
};
</script>
