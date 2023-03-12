import { storeToRefs } from "pinia";
import { useOptionsStore } from "~~/stores/options";
import { validate, format } from "@fiquu/cl-rut";

export function useRut() {
   const optionsStore = useOptionsStore();
   const { maxRut, minRut } = storeToRefs(optionsStore);

   const dvChars = "0123456789K";

   function getRandomNumber(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function getRandomDv() {
      return dvChars.charAt(getRandomNumber(0, dvChars.length));
   }

   function createRutPrototype() {
      const digits = getRandomNumber(minRut.value, maxRut.value);
      const dv = getRandomDv();

      return `${digits}-${dv}`;
   }

   function createRut() {
      let newRut = "";

      while (!validate(newRut)) {
         newRut = createRutPrototype();
      }

      return format(newRut);
   }

   class Rut {
      value: string;
      isCopied: boolean;

      constructor() {
         this.value = createRut();
         this.isCopied = false;
      }
   }

   return { Rut };
}
