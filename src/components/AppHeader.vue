<script setup lang="ts">
</script>

<template>
<header class="header">
    <div class="nav-container">
        <span class="nav-item" draggable="true" @dragstart="onDragStart" @dragover="onDragOver" @drop="onDrop" @dragend="onDragEnd">
            <a href="#top">
                <font-awesome-icon icon="fa-solid fa-house-user" />
                Top
            </a>
        </span>
        <span class="nav-item" draggable="true" @dragstart="onDragStart" @dragover="onDragOver" @drop="onDrop" @dragend="onDragEnd">
            <a href="#profile">
                <font-awesome-icon icon="fa-solid fa-address-card" />
                Profile
            </a>
        </span>
        <span class="nav-item" draggable="true" @dragstart="onDragStart" @dragover="onDragOver" @drop="onDrop" @dragend="onDragEnd">
            <a href="#works">
                <font-awesome-icon icon="fa-solid fa-box-archive" />
                Works
            </a>
        </span>
        <span class="nav-item" draggable="true" @dragstart="onDragStart" @dragover="onDragOver" @drop="onDrop" @dragend="onDragEnd">
            <a href="#contact">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                Contact
            </a>
        </span>
    </div>
    <input type="color" class="color-picker" @input="pickColor" />
</header>
</template>

<script>
export default {
    methods: {
        pickColor(event) {
            const color = event.target.value;
            document.querySelector('.header').style.backgroundColor = color;
        },
        onDragStart(event) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', event.target.id);
            setTimeout(() => {
                event.target.style.visibility = 'hidden';
            }, 0);
        },
        onDragOver(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        },
        onDrop(event) {
            event.preventDefault();
            const id = event.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(id);
            const dropzone = event.target.closest('.nav-item');
            if (dropzone && dropzone !== draggableElement) {
                const container = document.querySelector('.nav-container');
                container.insertBefore(draggableElement, dropzone.nextSibling);
            }
        },
        onDragEnd(event) {
            event.target.style.visibility = 'visible';
        }
    },
    mounted() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.id = 'nav-item-' + index;
        });
    }
}
</script>

<style>
.header {
    text-align: center;
    font-size: 18px;
    background-color: #333;
    padding: 20px;
    position: relative;
}

.nav-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.nav-item {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: move;
}

.nav-item a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-item a:hover {
    color: #00bfff;
}

.nav-item a:visited {
    color: #fff;
}

.nav-item:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.color-picker {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 20px; /* ヘッダーの上に配置 */
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
}

.color-picker::-webkit-color-swatch {
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.color-picker::-moz-color-swatch {
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
