<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div   
      x-data="{
            cityUlid1: 0,
            districtUlid1: 3,
            cityUlid2: 1,
            districtUlid2: 6,
            isSync: false,
            init(){
                this.$watch('isSync', value => {
                    if(!value) return;
                    this.$component('#test').updateCityWithoutResetDistrict(this.cityUlid1);
                    this.districtUlid2 = this.districtUlid1;
                });
                
                // 不須同步 || 兩值相等，直接結束
                this.$watch('cityUlid1', (value) => {
                  if(this.isSync && value !== this.cityUlid2){
                    console.log(1)
                    this.cityUlid2 = value;
                  }
                });
                this.$watch('districtUlid1', (value) => {
                  if(this.isSync && value !== this.districtUlid2){
                     console.log(2)
                    this.districtUlid2 = value;
                  }
                });
                this.$watch('cityUlid2', (value) => {
                  if(this.isSync && value !== this.cityUlid1){
                     console.log(3)
                    this.cityUlid1 = value;
                  }
                });
                 this.$watch('districtUlid2', (value) => {
                  if(this.isSync && value !== this.districtUlid1){
                     console.log(4)
                    this.districtUlid1 = value;
                  }
                });
            },
        }"
    >
      <h3>戶籍地址</h3>
      <x-location.wrapper>
        {{-- <x-location.city value="0"/>
        <x-location.district value="3"/> --}}
        <x-location.city x-model="cityUlid1"/>
        <x-location.district x-model="districtUlid1"/>
      </x-location.wrapper>
      <h3>通訊地址</h3>
      <x-location.wrapper id="test">
        {{-- <x-location.city value="1"/>
        <x-location.district value="6"/> --}}
        <x-location.city x-model="cityUlid2"/>
        <x-location.district x-model="districtUlid2"/>
      </x-location.wrapper>
      <div>
        <input id="sync__checkbox" type="checkbox" x-model="isSync" />
        <label for="sync__checkbox">通訊地址同戶籍地址</label>
      </div>
    </div>
  @stack('css')
  @stack('js')
  @vite('resources/js/alpine/bootstrap.js')
  </body>
</html>
