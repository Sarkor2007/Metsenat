<script setup>
// icons
import showIconBlue from '../assets/icons/eyeblue.svg'

import { mapGetters } from 'vuex'

</script>

<script>
export default {
    name: 'Students',
    data() {
        return {
            filteredStudents: [],
            activePage: null,
            pageCount: null,
            startNum: null,
            endNum: null
        }
    },
    methods: {
        goSingle(id) {
            this.$router.push(`/admin/students/single/${id}`)
        },
        getStudents(item) {
            this.$store.dispatch('fetchStudents', item)
        },
        minusPagination() {
            this.$store.dispatch('fetchStudents', 'minus')
        },
        plusPagination() {
            this.$store.dispatch('fetchStudents', 'plus')
        },
        filterStudents() {
            let selectedType = this.$store.state.selectedType;
            let selectedUniversity = this.$store.state.selectedUniversity;
            this.filteredStudents = this.getStudentsList?.filter(el =>
                (selectedType === 'all' || el.type == selectedType) &&
                (selectedUniversity === 'all' || el.institute.id === selectedUniversity)
            );
        }
    },
    computed: {
        ...mapGetters(['getStudentsList']),
        ...mapGetters(['getStudentsCount']),
        updateList() {
            return this.$store.state.studentsFilter
        }
        // filteredStudents() {
        //     let selectedType = this.$store.state.selectedType;
        //     let selectedUniversity = this.$store.state.selectedUniversity;
        //     return this.getStudentsList?.filter(el =>
        //         (selectedType === 'all' || el.type == selectedType) &&
        //         (selectedUniversity === 'all' || el.institute.id === selectedUniversity)
        //     );
        // },
    },
    watch: {
        getStudentsCount: function (data) {
            this.pageCount = Math.floor(data.count / 10);
            this.activePage = data.active;
            this.startNum = 1
            if (data.active >= 2) {
                this.startNum = ((data.active - 1) * 10) + 1
            }
            this.endNum = data.active * 10
            if (data.active > (Math.floor(data.count - 10) / 10)) {
                this.endNum = data.count
            }
        },
        getStudentsList: function (data) {
            this.filteredStudents = data
        },
        updateList: function () {
            this.filterStudents()
        }
    },
    created() {
        this.getStudents(1)
    }
}
</script>

<template>
    <section class="students">
        <div class="container">
            <div class="students__add">
                <div @click="this.$router.push('/admin/students/add')"
                    class="students__add-box">
                    <img src="../assets/icons/add.svg"
                        alt="add">
                    <h3>Talaba qo‘shish</h3>
                </div>
            </div>
            <div class="students__box">
                <div class="students__header">
                    <ul class="students__header-list">
                        <li class="number">#</li>
                        <li class="name">f.i.sh.</li>
                        <li class="type">Talabalik turi</li>
                        <li class="university">OTM</li>
                        <li class="summ-spent">Ajratilingan summa</li>
                        <li class="summ-contract">Kontrakt miqdori</li>
                        <li class="show">Amallar</li>
                    </ul>
                </div>
                <div class="students__body">
                    <ul v-if="filteredStudents?.length"
                        class="students__body-list">
                        <li v-for="(item, index) in filteredStudents"
                            :key="index"
                            class="item">
                            <ul class="item__box">
                                <li class="number">{{ ++index }}</li>
                                <li class="name">{{ item.full_name }}</li>
                                <li class="type">{{ item.type == 1 ? 'Bakalavr' : 'Magistr' }}</li>
                                <li class="unversity">{{ item.institute.name }}</li>
                                <li v-if="!item.given"
                                    class="summ-spent"><span>Ajratilmagan</span></li>
                                <li v-else
                                    class="summ-spent">{{ item.given.toLocaleString().replaceAll(',', ' ') }}
                                    <span>UZS</span>
                                </li>
                                <li class="summ-contract">{{ item.contract.toLocaleString().replaceAll(',', ' ') }}
                                    <span>UZS</span>
                                </li>
                                <li @click="goSingle(item.id)"
                                    class="show">
                                    <img :src="showIconBlue"
                                        draggable="false"
                                        alt="showIcon">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="empty"
                        v-else>
                        Empty
                    </div>
                </div>
            </div>
            <div class="pagination">
                <div class="pagination__count">
                    {{ getStudentsCount.count }} tadan {{ startNum }}-{{ endNum }} ko‘rsatilmoqda
                </div>
                <div class="pagination__block">
                    <div class="pagination__show">
                        <p>Ko‘rsatish</p>
                        <select name="count"
                            id="count">
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class="pagination__box">
                        <button :disabled="activePage <= 1"
                            :class="activePage <= 1 ? 'disabled' : ''"
                            @click="minusPagination"
                            class="pagination__btn left">
                            <img src="../assets/icons/pagination.svg"
                                alt="button">
                        </button>
                        <div class="pagination__wrapper">
                            <div v-if="activePage > 1"
                                @click="getStudents(activePage - 1)"
                                class="pagination__item">{{ activePage - 1 }}</div>
                            <div class="pagination__item active">{{ activePage }}</div>
                            <div class="pagination__item">...</div>
                            <div @click="getStudents(activePage + 1)"
                                class="pagination__item">{{ activePage + 1 }}</div>
                            <div @click="getStudents(activePage + 2)"
                                class="pagination__item">{{ activePage + 2 }}</div>
                        </div>
                        <button :disabled="activePage >= pageCount"
                            @click="plusPagination"
                            :class="activePage >= pageCount ? 'disabled' : ''"
                            class="pagination__btn">
                            <img src="../assets/icons/pagination.svg"
                                alt="button">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.students {
    padding: 48px 0px;
    width: 100%;

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 28px;
    }

    &__add {
        display: flex;
        justify-content: flex-end;

        &-box {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 8px 32px;
            background: #3366FF;
            border-radius: 5px;

            h3 {
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: -0.35px;
                color: #FFFFFF;
            }
        }
    }

    &__box {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow-x: auto;
        padding-bottom: 10px;

        &::-webkit-scrollbar {
            height: 8px;

            @media (max-width: 992px) {
                height: 3px;
            }
        }

        &::-webkit-scrollbar-track {
            background: rgb(202, 202, 202);
        }

        &::-webkit-scrollbar-thumb {
            background: gray;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: rgb(172, 172, 172);
        }
    }

    &__header {
        width: 100%;

        @media (max-width: 1100px) {
            width: 1100px;
        }

        &-list {
            width: 100%;
            display: flex;
            align-items: center;

            li {
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #B1B1B8;
                text-align: center;

                &.number {
                    width: 5%;
                }

                &.name {
                    width: 22%;
                    text-align: left;
                }

                &.type {
                    width: 13%;
                }

                &.university {
                    width: 22%;
                }

                &.summ-spent {
                    width: 15%;
                }

                &.summ-contract {
                    width: 15%;
                }

                &.show {
                    width: 8%;
                }
            }
        }
    }

    &__body {
        width: 100%;

        @media (max-width: 1100px) {
            width: 1100px;
        }

        &-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 12px;

            .item {
                background: #FFFFFF;
                border: 1px solid rgba(46, 91, 255, 0.08);
                border-radius: 8px;
                padding: 25px 0px;
                width: 100%;

                &__box {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    text-align: center;

                    li {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 22px;
                        color: #1D1D1F;
                    }

                    .number {
                        width: 5%;
                    }

                    .name {
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 18px;
                        color: #1D1D1F;

                        width: 22%;
                        text-align: left;
                    }

                    .type {
                        width: 13%;
                    }

                    .unversity {
                        width: 22%;
                    }

                    .summ-spent,
                    .summ-contract {
                        width: 15%;

                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        color: #2E384D;

                        span {
                            color: #B2B7C1;
                        }
                    }

                    .show {
                        width: 8%;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>