import { useEffect, useState } from "react";

export const useSomeplaceWasm = () => {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState("loading");
  useEffect(
    () => {
      if (!WebAssembly.instantiateStreaming) {
        // polyfill
        // @ts-ignore
        WebAssembly.instantiateStreaming = async (resp, importObject) => {
          return await WebAssembly.instantiate(resp, importObject);
        };
      }
      // @ts-ignore
      const go = new Go();
      // @ts-ignore
      let mod, inst;
      async function goInit() {
        try {
          const bytes = await fetch("/someplace.wasm");
          const result = await WebAssembly.instantiateStreaming(
            bytes,
            go.importObject
          );
          mod = result.module;
          inst = result.instance;
          go.run(inst);
          setStatus("ready");
        } catch (err) {
          console.error(err);
          setStatus("error");
        }
      }

      goInit();
    },
    [] // Only re-run effect if script src changes
  );
  return status;
};

export const useQuestingWasm = () => {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState("loading");
  useEffect(
    () => {
      if (!WebAssembly.instantiateStreaming) {
        // polyfill
        // @ts-ignore
        WebAssembly.instantiateStreaming = async (resp, importObject) => {
          return await WebAssembly.instantiate(resp, importObject);
        };
      }
      // @ts-ignore
      const go = new Go();
      // @ts-ignore
      let mod, inst;
      async function goInit() {
        try {
          const bytes = await fetch("/questing.wasm");
          const result = await WebAssembly.instantiateStreaming(
            bytes,
            go.importObject
          );
          mod = result.module;
          inst = result.instance;
          go.run(inst);
          setStatus("ready");
        } catch (err) {
          console.error(err);
          setStatus("error");
        }
      }

      goInit();
    },
    [] // Only re-run effect if script src changes
  );
  return status;
};
