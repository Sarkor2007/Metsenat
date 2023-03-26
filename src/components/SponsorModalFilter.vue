<script>
export default {
    name: 'SponsorModalFilter',
    methods: {
        closeSponsorFilter() {
            this.$store.commit('TOGGLE_FILTER_SPONSOR')
        },
        sponsorSumToggle(item) {
            for (const key in this.sponsorSumFilter) {
                this.sponsorSumFilter[key].active = false
            }
            item.active = true
        }
    },
    computed: {
        sponsorFilter() {
            return this.$store.state.isModalFilterSponsor
        },
        sponsorSumFilter() {
            return this.$store.state.sponsorSumsFilter
        },
        selectedStatus: {
            get() {
                return this.$store.state.selectedStatus;
            },
            set(value) {
                this.$store.commit("UPDATE_SELECTED_STATUS", value);
            }
        },
    },
}
</script>

<template>
    <div v-if="sponsorFilter"
        class="filter">
        <dialog :open="sponsorFilter">
            <div class="filter__header">
                <h3 class="filter__title">Filter</h3>
                <div class="filter__exit">
                    <img @click="closeSponsorFilter"
                        src="../assets/icons/exit.svg"
                        alt="exit btn">
                </div>
            </div>
            <div class="filter__status">
                <h3 class="filter__status-title">Ariza holati</h3>
                <select v-model="selectedStatus"
                    name="type"
                    id="type">
                    <option value="all">Barchasi</option>
                    <option value="new">Yangi</option>
                    <option value="moderation">Moderatsiya</option>
                    <option value="active">Tasdiqlangan</option>
                    <option value="cancel">Bekor qilingan</option>
                </select>
            </div>
            <div class="filter__summ">
                <h3 class="filter__summ-title">
                    Homiylik summasi
                </h3>
                <div class="filter__summ-box">
                    <div v-for="(item, index) in this.sponsorSumFilter"
                        :key="index"
                        @click="sponsorSumToggle(item)"
                        :class="item.active == true && item.type == 'all' ? 'all active' : item.active ? 'active' : item.type == 'all' ? 'all' : ''"
                        class="item">{{ item.money }} <span v-if="item.type !== 'all'"> UZS</span>
                        <img src="../assets/icons/checked.svg"
                            alt="check">
                    </div>
                </div>
            </div>
            <label for="date"
                class="filter__date">
                <h3 class="filter__date-title">
                    Sana
                </h3>
                <input type="date"
                    name="date"
                    id="date">
            </label>
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

    &__status {
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
            background: rgba(224, 231, 255, 0.2);
            border: 1px solid #E0E7FF;
            border-radius: 6px;
            width: 100%;
            padding: 12px 16px;
        }
    }

    &__summ {
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

        &-box {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;

            .item {
                cursor: pointer;
                width: calc(100% / 4 - 12px);
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E0E7FF;
                border-radius: 5px;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                display: flex;
                gap: 3px;
                align-items: center;
                position: relative;

                span {
                    font-weight: 400;
                    color: #2E5BFF;
                }

                img {
                    display: none;
                }

                &.active {
                    border: 2px solid #2E5BFF;

                    img {
                        display: inline-block;
                        position: absolute;
                        right: 0px;
                        top: 0px;
                        transform: translate(50%, -50%);
                    }
                }

                &.all {
                    background: #E0E7FF;
                }
            }
        }
    }

    &__date {
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

        input {
            max-width: 250px;
            width: 100%;
            background: rgba(224, 231, 255, 0.2);
            border: 1px solid #E0E7FF;
            border-radius: 6px;
            padding: 11px 16px;
        }
    }
}
</style>