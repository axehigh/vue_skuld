<template>
  <!--
  <md-table>
    <md-table-row>
      <md-table-head>Vessel</md-table-head>
      <md-table-head>IMO</md-table-head>
      <md-table-head>Flag</md-table-head>
      <md-table-head>Built</md-table-head>
    </md-table-row>

    <md-table-row v-for="vessel in vessels" v-bind:key="vessel.AUTO_ID">
      <md-table-cell>{{vessel.SKIPSNAVN}}</md-table-cell>
      <md-table-cell>{{vessel.IMO}}</md-table-cell>
      <md-table-cell>{{vessel.FLAG}}</md-table-cell>
      <md-table-cell>{{vessel.YEARBUILT}}</md-table-cell>
    </md-table-row>
  </md-table>
-->
  <md-table v-model="vessels"
            md-card
            md-fixed-header
            md-sort="SKIPSNAVN"
            md-sort-order="asc">
    <md-table-toolbar>
      <h1 class="md-title">Vessels</h1>
      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
      </md-field>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="Vessel" md-sort-by="SKIPSNAVN">{{ item.SKIPSNAVN }}</md-table-cell>
      <md-table-cell md-label="IMO" md-sort-by="IMO">{{ item.IMO }}</md-table-cell>
      <md-table-cell md-label="Flag" md-sort-by="FLAG">{{ item.FLAG }}</md-table-cell>
      <md-table-cell md-label="Built" md-sort-by="YEARBUILT">{{ item.YEARBUILT }}</md-table-cell>
    </md-table-row>
  </md-table>

</template>
<script>
    import axios from 'axios';

    export default {
        name: "Table",

        data() {
            return {
                vessels: null
            }
        }
        ,
        created: function () {
            axios
                .get('http://188.95.244.67:41897/mobile/index.php/vessel:01-10-2020')
                .then(res => {
                    this.vessels = res.data;
                })
        }

    };
</script>
