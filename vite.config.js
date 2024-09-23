import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { default as svgr, default as svgrPlugin } from 'vite-plugin-svgr';

// `__dirname`과 같은 기능을 제공하기 위해 파일 URL을 디렉토리 경로로 변환
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), svgrPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        // 청크 분할 규칙 설정
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendors'; // React 관련 라이브러리
            }
            if (id.includes('lodash')) {
              return 'lodash'; // Lodash를 별도 청크로 분리
            }
            return 'vendor'; // 그 외의 node_modules에 있는 모듈은 vendor로 묶음
          }

          // 특정 경로에 있는 이미지나 리소스들을 별도로 분리할 수도 있음
          if (id.includes('src/assets/webps/booth/md')) {
            return 'md-assets'; // 특정 폴더의 리소스를 하나의 청크로 분리
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // 청크 크기 경고 제한 (단위: KB)
  },
  server: {
    port: 3000,
    open: true,
  },
});
