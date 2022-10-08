<script setup>
import { onMounted, ref, watch } from 'vue'

//Page Title
onMounted(() => {
    document.title = 'Tip Calculator App'
})

//count tip & total
const bill = ref(0)
const tip = ref('')
const people = ref(1)

const tipAmount = ref(0)
const total = ref(0)

watch([bill, tip, people], ([newBil, newTip, newPeople]) => {
    tipAmount.value = newBil * (newTip / 100) / newPeople
    total.value = newBil / newPeople + tipAmount.value
})

const reset = () => {
    bill.value = 0
    tip.value = 0
    people.value = 1
}

</script>

<template>
    <div class="min-h-screen">

        <header>
            <div class="mt-12">
                <img src="../assets/logo.svg" alt="Logo" class="mx-auto">
            </div>
        </header>

        <section id="tip-calculator" class="mt-14">
            <div class="p-6 md:p-10 bg-white w-full sm:max-w-3xl mx-auto rounded-3xl shadow-2xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-8">
                        <!-- input bill -->
                        <div class="flex gap-2 flex-col">
                            <p class="text-[#5b8c93]">Bill</p>
                            <div class="flex gap-2 items-center bg-[#F3F8FB] px-5 py-2 rounded-md focus-within:outline  outline-2 outline-[#5E7A7D]">
                                <img src="../assets/icon-dollar.svg" alt="Dollar Icon" class="w-3 h-5">
                                <input v-model="bill" type="number" class="w-full text-3xl text-right bg-transparent focus:outline-none" placeholder="0">
                            </div>
                        </div>

                        <!-- select tip % -->
                        <div class="flex gap-2 flex-col">
                            <p class="text-[#5b8c93]">Select Tip %</p>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <label class="cursor-pointer">
                                    <input type="radio" name="size" id="5%" v-model="tip" class="sr-only mx-auto peer" value="5">
                                    <div class="flex items-center justify-center bg-[#00474B] hover:bg-[#9FE8DF] hover:text-[#00474B] peer-checked:bg-[#26C2AD] text-white peer-checked:text-[#00474B] w-full text-2xl py-2 rounded-md">
                                        5%
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="size" v-model="tip" class="sr-only mx-auto peer" value="10">
                                    <div class="flex items-center justify-center bg-[#00474B] hover:bg-[#9FE8DF] hover:text-[#00474B] peer-checked:bg-[#26C2AD] text-white peer-checked:text-[#00474B] w-full text-2xl py-2 rounded-md">
                                        10%
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="size" v-model="tip" class="sr-only mx-auto peer" value="15">
                                    <div class="flex items-center justify-center bg-[#00474B] hover:bg-[#9FE8DF] hover:text-[#00474B] peer-checked:bg-[#26C2AD] text-white peer-checked:text-[#00474B] w-full text-2xl py-2 rounded-md">
                                        15%
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="size" v-model="tip" class="sr-only mx-auto peer" value="25">
                                    <div class="flex items-center justify-center bg-[#00474B] hover:bg-[#9FE8DF] hover:text-[#00474B] peer-checked:bg-[#26C2AD] text-white peer-checked:text-[#00474B] w-full text-2xl py-2 rounded-md">
                                        25%
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="size" v-model="tip" class="sr-only mx-auto peer" value="50">
                                    <div class="flex items-center justify-center bg-[#00474B] hover:bg-[#9FE8DF] hover:text-[#00474B] peer-checked:bg-[#26C2AD] text-white peer-checked:text-[#00474B] w-full text-2xl py-2 rounded-md">
                                        50%
                                    </div>
                                </label>
                                <label>
                                    <div class="flex gap-2 items-center bg-[#F3F8FB] px-2 py-2 focus-within:outline  outline-2 outline-[#5E7A7D] rounded-md">
                                        <input v-model="tip" type="number" class="w-full text-2xl md:text-xl text-right bg-transparent focus:outline-none" placeholder="Custom">
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- number of people -->
                        <div class="flex gap-2 flex-col">
                            <p class="text-[#5b8c93]">Number of People</p>
                            <div class="flex gap-2 items-center bg-[#F3F8FB] px-5 py-2 focus-within:outline outline-2 outline-[#5E7A7D] rounded-md">
                                <img src="../assets/icon-person.svg" alt="Person Icon" class="w-3 h-4">
                                <input v-model="people" type="number" class="w-full text-3xl text-right bg-transparent focus:outline-none" placeholder="0">
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-between bg-[#00474b] rounded-3xl px-6 md:px-8 py-10 gap-8">
                        <div class="space-y-8">
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="block text-white">Tip Amount</span>
                                    <span class="text-[#5b8c93]">/ person</span>
                                </div>
                                <div>
                                    <span class="text-[#28c1ab] text-3xl">${{ tipAmount.toFixed(2) }}</span>
                                </div>
                            </div>

                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="block text-white">Total</span>
                                    <span class="text-[#5b8c93]">/ person</span>
                                </div>
                                <div>
                                    <span class="text-[#28c1ab] text-3xl">${{ total.toFixed(2) }}</span>
                                </div>
                            </div>
                        </div>

                        <button @click="reset" class="p-2 w-full text-[#00474B] bg-[#26C2AD] hover:bg-[#9FE8DF] rounded-md uppercase">Reset</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>

body {
    background: #C5E4E7;
}


</style>