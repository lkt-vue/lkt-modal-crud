declare namespace _default {
    const plugins: import("vite").Plugin[];
    namespace resolve {
        const alias: {
            '@': string;
            '@test': string;
        };
    }
    namespace build {
        export namespace lib {
            const entry: string;
            const name: string;
            function fileName(format: any): string;
        }
        export { outDir };
        export const minify: boolean;
        export namespace rollupOptions {
            const external: string[];
            namespace output {
                const globals: {
                    vue: string;
                    'lkt-modal': string;
                    'lkt-tools': string;
                    'lkt-http-client': string;
                    'lkt-events': string;
                    'lkt-vue-events': string;
                    'lkt-data-state': string;
                    'mount-vue-component': string;
                };
                const sourcemapExcludeSources: boolean;
            }
        }
    }
    namespace test {
        namespace coverage {
            const reporter: string[];
        }
        function resolveSnapshotPath(testPath: any, snapExtension: any): string;
    }
}
export default _default;
declare const outDir: string;
