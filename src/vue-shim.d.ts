declare module '*.vue' {
  import Vue from 'vue';

  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export { component };
  export default Vue;
}

declare module '*.vue' { // NOTE: ts-loader

}