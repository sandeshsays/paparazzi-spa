<template>
  <section class="m-16">
    <h1 class="text-5xl font-semibold mb-8">Panels</h1>

    <base-panel class="mb-8">
      Sint dolor ad anim laborum sunt. Eu voluptate voluptate nostrud culpa.
      Aliquip fugiat reprehenderit incididunt magna. Consequat do velit dolore
      pariatur officia duis. Elit commodo ut minim consectetur veniam elit
      deserunt duis nulla cupidatat ex occaecat ad. Et ut ipsum sint elit fugiat
      commodo officia occaecat consequat fugiat laborum aute id. Ut adipisicing
      ullamco aute est laborum irure velit adipisicing voluptate est.
    </base-panel>

    <base-panel class="mb-8 flex" noPadding>
      <div class="bg-blue-500 w-64"></div>
      <div class="px-6 py-4 flex-1">
        In elit amet incididunt quis officia nostrud quis voluptate labore dolor
        id. Cillum sint do nulla ut occaecat reprehenderit culpa. Commodo cillum
        in fugiat ipsum fugiat enim aliquip id occaecat est excepteur. Commodo
        esse sint officia cupidatat amet. Proident minim duis esse mollit sunt
        ullamco officia qui occaecat deserunt.
      </div>
    </base-panel>

    <base-panel class="mb-8" title="My Title" sub="Some metadata">
      Ipsum mollit excepteur nostrud eu. Voluptate ex nulla aute velit officia
      reprehenderit id ipsum excepteur eu. Ea dolor ullamco ad deserunt.
    </base-panel>

    <base-panel class="mb-8" title="Leads" sub="Some metadata">
      <template #actions>
        <base-button primary small>Add New</base-button>
      </template>
      Id veniam eiusmod dolor aliqua ipsum elit labore laborum laborum laborum
      velit dolor ea in.
    </base-panel>

    <h1 class="text-5xl font-semibold mb-8">Button</h1>
    <table class="w-full">
      <tr class="font-semibold">
        <td>Default</td>
        <td>Danger</td>
        <td>Primary</td>
      </tr>
      <tr>
        <td class="py-6">
          <base-button @click="sayHi">Default</base-button>
        </td>
        <td class="py-6">
          <base-button danger>Danger</base-button>
        </td>
        <td class="py-6">
          <base-button primary>Primary</base-button>
        </td>
      </tr>

      <tr>
        <td class="py-6">
          <base-button small>Default</base-button>
        </td>
        <td class="py-6">
          <base-button small danger>Danger</base-button>
        </td>
        <td class="py-6">
          <base-button small primary>Primary</base-button>
        </td>
      </tr>

      <tr>
        <td class="py-6">
          <base-button disabled>Default</base-button>
        </td>
        <td class="py-6">
          <base-button disabled danger>Danger</base-button>
        </td>
        <td class="py-6">
          <base-button disabled primary>Primary</base-button>
        </td>
      </tr>
    </table>

    <h1 class="text-5xl font-semibold mb-8">Form Elements</h1>
    <base-panel>
      <base-input v-model="name" label="Name" class="mb-4"></base-input>
      <base-input v-model="dob" label="DOB" type="date"></base-input>
       <base-select
        v-model="plan"
        :options="availablePlans"
        label="Select a Plan"
      ></base-select>
      <base-checkbox v-model="subscribe" label="Subscribe"></base-checkbox>

      <!-- <div class="text-xs mb-2">
        <span class="font-semibold">Subscribe:</span>
        <span v-text="subscribe ? 'true' : 'false'"></span>
      </div>

      <div class="text-xs mb-2">
        <span class="font-semibold">Name:</span>
        <span v-text="name"></span>
      </div>
      <div class="text-xs mb-2">
        <span class="font-semibold">DOB:</span>
        <span v-text="dob"></span>
      </div>
      <div class="text-xs mb-2">
        <span class="font-semibold">Plan::</span>
        <span v-text="plan"></span>
      </div> -->
    </base-panel>
  </section>
</template>

<script>
import BasePanel from "./BasePanel";
import BaseButton from "./BaseButton";
import BaseInput from "./BaseInput";
import BaseSelect from "./BaseSelect";
import BaseCheckbox from "./BaseCheckbox";
export default {
  components: { BasePanel, BaseButton, BaseInput, BaseSelect, BaseCheckbox },
  data() {
    return {
      name: "John Doe",
      dob: "1990-01-01",
      plan: "free",
      availablePlans: [
        { value: "free", name: "Free" },
        { value: "starter", name: "Starter" },
        { value: "premium", name: "Premium" },
        { value: "business", name: "Business" },
      ],
      subscribe: false,
    };
  },
  methods: {
    sayHi() {
      alert("Hi");
    },
  },
};
</script>
