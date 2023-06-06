import "Styles/templates/index.scss";
import vueWrapper from "../utils/vue-wrapper";
import testComponent from "../vue/Test/TestComponent.vue";

document.addEventListener("click", async () => {
  console.log("click");
  const module = await import(
    /* webpackChunkName: "print" */ "../components/print"
  );
  const print = module.default;
  print();
});

vueWrapper(testComponent, "Test", "#test-data");
vueWrapper(testComponent, "Test", "#test-data-2");
