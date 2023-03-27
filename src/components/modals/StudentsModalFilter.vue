<script setup>
import exitBtn from '../../assets/icons/exit.svg'
import checked from '../../assets/icons/checked.svg'

</script>

<script>
export default {
    name: 'SponsorModalFilter',
    methods: {
        closeStudentsFilter() {
            this.$store.commit('TOGGLE_FILTER_STUDENTS')
        },
    },
    computed: {
        studentsFilter() {
            return this.$store.state.isModalFilterStudents
        },
        sponsorSumFilter() {
            return this.$store.state.sponsorSumsFilter
        },
        selectedType: {
            get() {
                return this.$store.state.selectedType;
            },
            set(value) {
                this.$store.commit("UPDATE_SELECTED_TYPE", value);
            }
        },
        selectedUniversity: {
            get() {
                return this.$store.state.selectedUniversity;
            },
            set(value) {
                this.$store.commit("UPDATE_SELECTED_UNIVERSITY", value);
            }
        },
    },
}
</script>

<template>
    <div v-if="studentsFilter"
        class="filter">
        <dialog :open="studentsFilter">
            <div class="filter__header">
                <h3 class="filter__title">Filter</h3>
                <div class="filter__exit">
                    <img @click="closeStudentsFilter"
                        :src="exitBtn"
                        alt="exit btn">
                </div>
            </div>
            <div class="filter__select">
                <h3 class="filter__select-title">Talabalik turi</h3>
                <select v-model="selectedUniversity"
                    name="type"
                    id="type">
                    <option value="all">Barchasi</option>
                    <option value="bakalavr">Bakalavr</option>
                    <option value="magistr">Magistr</option>
                </select>
            </div>
            <div class="filter__select">
                <h3 class="filter__select-title">OTM</h3>
                <select v-model="selectedType"
                    name="type"
                    id="type">
                    <option value="all">Barchasi</option>
                    <option value="inha">Toshkent shahridagi INHA Universiteti</option>
                    <option value="milliy">O’zbekiston milliy universiteti</option>
                    <option value="actived">Tasdiqlangan</option>
                    <option value="cancel">Bekor qilingan</option>
                </select>
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

    &__select {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-title {
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 1.125px;
            text-transform: uppercase;
            color: #1D1D1F;
        }

        select {
            cursor: pointer;
            background: rgba(224, 231, 255, 0.2);
            border: 1px solid #E0E7FF;
            border-radius: 6px;
            width: 100%;
            padding: 12px 16px;
        }
    }
}
</style>