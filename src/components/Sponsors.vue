<script setup>
import showIconBlue from '../assets/icons/eyeblue.svg'
import { mapGetters } from 'vuex'
</script>

<script>
export default {
    name: 'Sponsors',
    data() {
        return {
            paginationList: []
        }
    },
    methods: {
        getSponsors(item) {
            this.$store.dispatch('fetchSponsors', item)
        },
        goSingle(id) {
            this.$router.push(`/admin/sponsors/single/${id}`)
        }
    },
    computed: {
        ...mapGetters(['getSponsorsList']),
        filteredStatus() {
            let selectedStatus = this.$store.state.selectedStatus;
            let item = this.getSponsorsList;
            return selectedStatus === 'all'
                ? item
                : item.filter(el => el.get_status_display === selectedStatus);
        },
        filteredSponsorSum() {
            let sumFilter = this.$store.state.sponsorSumsFilter;
            let item = this.filteredStatus;
            for (const key in sumFilter) {
                if (sumFilter[key].active) {
                    let money = sumFilter[key].money;
                    if (money !== 'Barchasi') {
                        item = item.filter(el => el.sum <= money);
                    }
                }
            }
            return item;
        },
    },
    created() {
        this.getSponsors(1)
    }
}
</script>

<template>
    <section class="sponsors">
        <div class="container">
            <div class="sponsors__box">
                <div class="sponsors__header">
                    <ul class="sponsors__header-list">
                        <li class="number">#</li>
                        <li class="name">f.i.sh.</li>
                        <li class="telefon">Tel.Raqami</li>
                        <li class="summ-sponsor">Homiylik summasi</li>
                        <li class="summ-spent">Sarflangan summa</li>
                        <li class="date">Sana</li>
                        <li class="status">Holati</li>
                        <li class="show">Amallar</li>
                    </ul>
                </div>
                <div class="sponsors__body">
                    <ul v-if="filteredSponsorSum?.length"
                        class="sponsors__body-list">
                        <li v-for="(item, index) in filteredSponsorSum"
                            :key="index"
                            class="item">
                        <ul class="item__box">
                            <li class="number">{{ index + 1 }}</li>
                            <li class="name">{{ item.full_name }}</li>
                                <li class="telefon">{{ item.phone }}</li>
                                <li class="summ-sponsor">{{ item.sum.toLocaleString().replaceAll(',', ' ') }}
                                    <span>UZS</span>
                                </li>
                                <li class="summ-spent">{{ item.spent.toLocaleString().replaceAll(',', ' ') }}
                                    <span>UZS</span>
                                </li>
                                <li class="date">{{ item.created_at.slice(0, 10) }}</li>
                                <li class="status"
                                    :class="item.get_status_display">{{ item.get_status_display }}</li>
                                <li @click="goSingle(item.id)"
                                    class="show">
                                    <img :src="showIconBlue"
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
                            <div @click="getSponsors(item)"
                                v-for="(item, index) in 10"
                                :key="index"
                                class="pagination__item active">{{ item }}</div>
                            <!-- <div class="pagination__item">{{ item }}</div>
                                                                            <div class="pagination__item">...</div>
                                                                            <div class="pagination__item">9</div>
                                                                            <div class="pagination__item">10</div> -->
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
.sponsors {
    padding: 48px 0px;
    width: 100%;

    &__box {
        margin-bottom: 28px;
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
                    width: 20%;
                    text-align: left;
                }

                &.telefon {
                    width: 15%;
                }

                &.summ-sponsor {
                    width: 15%;
                }

                &.summ-spent {
                    width: 15%;
                }

                &.date {
                    width: 10%;
                }

                &.status {
                    width: 12%;
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
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 22px;
                        text-align: center;
                        color: #1D1D1F;
                    }

                    .name {
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 18px;
                        color: #1D1D1F;
                        width: 20%;
                        text-align: left;
                    }

                    .telefon {
                        width: 15%;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 22px;
                        color: #1D1D1F;
                    }

                    .summ-sponsor {
                        width: 15%;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        color: #2E384D;

                        span {
                            color: #B2B7C1;
                        }
                    }

                    .summ-spent {
                        width: 15%;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        text-align: center;
                        color: #2E384D;

                        span {
                            color: #B2B7C1;
                        }
                    }

                    .date {
                        width: 10%;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 22px;
                        color: #1D1D1F;
                    }

                    .status {
                        width: 12%;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 22px;

                        &.Yangi {
                            color: #5BABF2;
                        }

                        &.Moderatsiyada {
                            color: #FFA445;
                        }

                        &.actived {
                            color: #00CF83;
                        }

                        &.cancel {
                            color: #979797;
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

<style lang="scss">
.pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__count {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #1D1D1F;
    }

    &__show {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #1D1D1F;

        select {
            cursor: pointer;
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            color: #1D1D1F;
            padding: 5px 7px;
            border-radius: 4px;
            background: #FFFFFF;
            border: 1px solid #DFE3E8;
        }
    }


    &__block {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__btn {
        background: #FFFFFF;
        border: 1px solid #DFE3E8;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 9px 11px;
        cursor: pointer;

        &.left {
            transform: rotate(180deg);
            opacity: .35;
            cursor: auto;
        }
    }

    &__wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__item {
        cursor: pointer;
        width: 32px;
        height: 32px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #1D1D1F;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: 1px solid #DFE3E8;
        border-radius: 4px;

        &.active {
            color: #3366FF;
            border: 1px solid #3366FF;
        }
    }
}

.empty {
    background: #FFFFFF;
    // border: 1px solid rgba(46, 91, 255, 0.08);
    // border-radius: 8px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>