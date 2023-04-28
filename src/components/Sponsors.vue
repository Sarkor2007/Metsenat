<script setup>
import showIconBlue from '../assets/icons/eyeblue.svg'
import { mapGetters } from 'vuex'

</script>

<script>
export default {
    name: 'Sponsors',
    data() {
        return {
            paginationList: [],
            filteredSponsor: [],
            activePage: 1,
            pageCount: null,
            startNum: null,
            endNum: null
        }
    },
    methods: {
        getSponsors(item) {
            this.$store.dispatch('fetchSponsors', item)
        },
        goSingle(id) {
            this.$router.push(`/admin/sponsors/single/${id}`);
        },
        minusPagination() {
            this.$store.dispatch('fetchSponsors', 'minus')
        },
        plusPagination() {
            this.$store.dispatch('fetchSponsors', 'plus')
        },
        filterSponsors() {
            let selectedStatus = this.$store.state.selectedStatus;
            let sumFilter = this.$store.state.sponsorSumsFilter;
            let sponsors = this.getSponsorsList;

            let filteredSponsors = selectedStatus === 'all'
                ? sponsors
                : sponsors.filter(el => el.get_status_display === selectedStatus);

            for (const key in sumFilter) {
                if (sumFilter[key].active) {
                    const money = sumFilter[key].money;
                    if (money !== 'Barchasi') {
                        filteredSponsors = filteredSponsors.filter(el => el.sum <= money);
                    }
                }
            }

            this.filteredSponsor = filteredSponsors;
        },
    },
    computed: {
        ...mapGetters(['getSponsorsList']),
        ...mapGetters(['sponsorsCount']),
        updateSponsorList() {
            return this.$store.state.sponsorsFilter
        }
    },
    watch: {
        sponsorsCount: function (data) {
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
        getSponsorsList: function (data) {
            this.filteredSponsor = data
        },
        updateSponsorList: function () {
            this.filterSponsors()
        }
    },
    created() {
        this.getSponsors(1)
    },
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
                    <ul v-if="filteredSponsor?.length"
                        class="sponsors__body-list">
                        <li v-for="(item, index) in filteredSponsor"
                            :key="index"
                            class="item">
                            <ul class="item__box">
                                <li class="number">{{ index + 1 }}</li>
                                <li class="name">{{ item.full_name }}</li>
                                <li class="telefon">{{ item.phone }}</li>
                                <li class="summ-sponsor">{{ item.sum.toLocaleString().replaceAll(',', ' ') }}
                                    <span>UZS</span>
                                </li>
                                <li v-if="!item.spent"
                                    class="summ-spent"><span>Sarflanmagan</span></li>
                                <li v-else
                                    class="summ-spent">{{ item.spent.toLocaleString().replaceAll(',', ' ') }}
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
                    {{ sponsorsCount.count ? sponsorsCount.count : 10 }} tadan {{ startNum ? startNum : 1 }}-{{ endNum
                        ?
                        endNum : 10 }} ko‘rsatilmoqda
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
                        <button :disabled="sponsorsCount.active <= 1"
                            :class="sponsorsCount.active <= 1 ? 'disabled' : ''"
                            @click="minusPagination"
                            class="pagination__btn left">
                            <img src="../assets/icons/pagination.svg"
                                alt="button">
                        </button>
                        <div class="pagination__wrapper">
                            <div v-if="sponsorsCount.active > 1"
                                @click="getSponsors(sponsorsCount.active - 1)"
                                class="pagination__item">{{ sponsorsCount.active - 1 }}</div>
                            <div class="pagination__item active">{{ sponsorsCount.active }}</div>
                            <div class="pagination__item">...</div>
                            <div @click="getSponsors(sponsorsCount.active + 1)"
                                class="pagination__item">{{ sponsorsCount.active + 1 }}</div>
                            <div @click="getSponsors(sponsorsCount.active + 2)"
                                class="pagination__item">{{ sponsorsCount.active + 2 }}</div>
                        </div>
                        <button :disabled="sponsorsCount.active >= pageCount"
                            @click="plusPagination"
                            :class="sponsorsCount.active >= pageCount ? 'disabled' : ''"
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
    gap: 25px;

    @media (max-width: 630px) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }

    &__count {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #1D1D1F;
    }

    &__show {
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #1D1D1F;

        p {
            @media (max-width: 410px) {
                display: none;
            }
        }

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
        gap: 10px;

        @media (max-width: 630px) {
            width: 100%;
            justify-content: space-between;
        }
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
        }

        &.disabled {
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