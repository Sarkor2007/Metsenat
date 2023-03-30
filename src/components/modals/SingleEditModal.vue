<script setup>
import exitBtn from '../../assets/icons/exit.svg'
</script>

<script>
export default {
    name: 'SingleEditModal',
    props: ['open'],
    methods: {
        closeEdit(){
            this.$emit('closeEdit')
        }
    }
}
</script>

<template>
    <div v-if="this.open"
        class="filter">
        <dialog :open="this.open">
            <div class="filter__header">
                <h3 class="filter__title">Tahrirlash</h3>
                <div class="filter__exit">
                    <img @click="closeEdit"
                        :src="exitBtn"
                        alt="exit btn">
                </div>
            </div>

        </dialog>
    </div>
</template>

<style lang="scss" scoped>
.filter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);

    dialog {
        background: #FFFFFF;
        border-radius: 12px;
        padding: 28px;
        max-width: 590px;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #F5F5F7;
        padding-bottom: 28px;
    }

    &__exit {
        cursor: pointer;
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #28293D;
    }

}
</style>