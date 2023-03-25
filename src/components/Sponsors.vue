<script setup>
import showIcon from '../assets/icons/eye.svg'
</script>

<script>
export default {
    name: 'Sponsors',
    data() {
        return {
            sponsorsList: [
                {
                    id: 1,
                    name: 'Alimov Abror Xabibullayevich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '30 000 000',
                    sumSpent: '0',
                    date: '15.01.2021',
                    status: 'Yangi',
                    howis: 'new'
                },
                {
                    id: 2,
                    name: 'Saimov Rustam Saimjonovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '1 000 000',
                    sumSpent: '0',
                    date: '02.02.2021',
                    status: 'Moderatsiyada',
                    howis: 'modified'
                },
                {
                    id: 3,
                    name: 'Sanginov Otabek Muratovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '5 000 000',
                    sumSpent: '5 000 000',
                    date: '20.04.2021',
                    status: 'Tasdiqlangan',
                    howis: 'actived'
                },
                {
                    id: 4,
                    name: 'Nazarov Sanjar Olimovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: '7 000 000',
                    sumSpent: '7 000 000',
                    date: '03.05.2021',
                    status: 'Bekor qilingan',
                    howis: 'cancel'
                },
            ]
        }
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
                    <ul class="sponsors__body-list">
                        <li v-for="(item, index) in this.sponsorsList"
                            :key="index"
                            class="item">
                            <ul class="item__box">
                                <li class="number">{{ item.id }}</li>
                                <li class="name">{{ item.name }}</li>
                                <li class="telefon">{{ item.tel }}</li>
                                <li class="summ-sponsor">{{ item.sumSponsor }} <span>UZS</span></li>
                                <li class="summ-spent">{{ item.sumSpent }} <span>UZS</span></li>
                                <li class="date">{{ item.date }}</li>
                                <li class="status"
                                    :class="item.howis">{{ item.status }}</li>
                                <li class="show">
                                    <img :src="showIcon"
                                        alt="showIcon">
                                </li>
                            </ul>
                        </li>
                    </ul>
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

                        &.new {
                            color: #5BABF2;
                        }

                        &.modified {
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
</style>