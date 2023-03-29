<script setup>
import showIconBlue from '../assets/icons/eyeblue.svg'
</script>

<script>
export default {
    name: 'Students',
    data() {
        return {
            studentsList: [
                {
                    id: 1,
                    name: 'Alimov Abror Xabibullayevich',
                    type: 'Bakalavr',
                    otm: 'Toshkent shahridagi INHA Universiteti',
                    university: 'inha',
                    sumSpent: '14 000 000',
                    sumContract: '30 000 000',
                },
                {
                    id: 2,
                    name: 'Saimov Rustam Saimjonovich',
                    type: 'Magistr',
                    otm: 'O’zbekiston milliy universiteti',
                    university: 'milliy',
                    sumSpent: '28 000 000',
                    sumContract: '28 000 000',
                },
            ]
        }
    },
    computed: {
        filteredStudents() {
            const selectedType = this.$store.state.selectedType;
            const selectedUniversity = this.$store.state.selectedUniversity;
            return this.studentsList.filter(el =>
                (selectedType === 'all' || el.type === selectedType) &&
                (selectedUniversity === 'all' || el.university === selectedUniversity)
            );
        }
    }
}
</script>

<template>
    <section class="students">
        <div class="container">
            <div class="students__add">
                <div class="students__add-box">
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
                    <ul v-if="filteredStudents.length"
                        class="students__body-list">
                        <li v-for="(item, index) in this.filteredStudents"
                            :key="index"
                            class="item">
                            <ul class="item__box">
                                <li class="number">{{ item.id }}</li>
                                <li class="name">{{ item.name }}</li>
                                <li class="type">{{ item.type }}</li>
                                <li class="unversity">{{ item.otm }}</li>
                                <li class="summ-spent">{{ item.sumSpent }} <span>UZS</span></li>
                                <li class="summ-contract">{{ item.sumContract }} <span>UZS</span></li>
                                <li class="show">
                                    <img @click="this.$router.push('/single')"
                                        :src="showIconBlue"
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
                    59 tadan 1-10 ko‘rsatilmoqda
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
                        <button class="pagination__btn left">
                            <img src="../assets/icons/pagination.svg"
                                alt="button">
                        </button>
                        <div class="pagination__wrapper">
                            <div class="pagination__item active">1</div>
                            <div class="pagination__item">2</div>
                            <div class="pagination__item">...</div>
                            <div class="pagination__item">9</div>
                            <div class="pagination__item">10</div>
                        </div>
                        <button class="pagination__btn">
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

                    .number {
                        width: 5%;
                    }

                    .name {
                        width: 22%;
                        text-align: left;
                    }

                    .type {
                        width: 13%;
                    }

                    .unversity {
                        width: 22%;
                    }

                    .summ-spent {
                        width: 15%;
                    }

                    .summ-contract {
                        width: 15%;
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