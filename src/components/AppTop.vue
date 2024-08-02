<template>
  <div id="top">
    <h1 class="title" @mousedown="startDrag" @mouseup="stopDrag" @mousemove="drag">壊せるポートフォリオ</h1>
    <div class="body" contenteditable="true">
      {{ bodyText }}
    </div>
    <button v-if="isTyping" @click="skipText">スキップ</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDragging = ref(false);
const offset = ref({ x: 0, y: 0 });

const startDrag = (event: MouseEvent) => {
  isDragging.value = true;
  offset.value = { x: event.clientX, y: event.clientY };
};

const stopDrag = () => {
  isDragging.value = false;
};

const drag = (event: MouseEvent) => {
  if (isDragging.value) {
    const title = event.target as HTMLElement;
    const dx = event.clientX - offset.value.x;
    const dy = event.clientY - offset.value.y;
    title.style.transform = `translate(${dx}px, ${dy}px)`;
  }
};

const bodyText = ref('');
const fullText = `こんにちは！私のポートフォリオへようこそ。
      私はウェブ開発者として、ユーザーにとって使いやすく魅力的なデジタル体験を提供することに情熱を注いでいます。
      私のスキルセットには、フロントエンドとバックエンドの開発、デザイン、そしてプロジェクト管理が含まれています。
このポートフォリオでは、私が手掛けたプロジェクトや作品を紹介しています。
各プロジェクトは、私の技術力や創造性を反映しており、さまざまな課題に対する解決策を提供しています。
私の仕事を通じて、クライアントやユーザーのニーズに応えることを常に心がけています。
ぜひご覧いただき、私のスキルやスタイルについてご意見をお聞かせください。今後のプロジェクトでのコラボレーションを楽しみにしています！`;
var sleeptime = 50;
const isTyping = ref(true);

const typeText = (text: string, index: number) => {
  if (isTyping.value) {
    if (index < text.length) {
      if (text.charAt(index) === '<' && text.substr(index, 4) === '<br>') {
        bodyText.value += '\n';
        index += 4;
      } else {
        bodyText.value += text.charAt(index);
        index++;
      }
      setTimeout(() => typeText(text, index), sleeptime);
      if (sleeptime > 1) {
        sleeptime -= 0.1;
      }
    } else {
      isTyping.value = false;
    }
  }
};

const skipText = () => {
  bodyText.value = fullText;
  isTyping.value = false;
};

onMounted(() => {
  typeText(fullText, 0);
});
</script>

<style scoped>
#top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  text-align: center;
}

.title {
  font-size: 48px;
  font-weight: bold;
  margin-top: 150px;
  margin-bottom: 40px;
  color: #ff6347;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.body {
  padding: 20px;
  background-color: #ffffff54;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px;
  overflow-y: auto;
  max-height: 100vh;
  display: flex;
  align-items: flex-start;
}
</style>
