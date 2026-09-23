<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/images/carousel 1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel 2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel 3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel 4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="centre">
                    <v-card-title>welcome to kilimani Hospital</v-card-title>
                    <v-card-text>we treat but jesus heals</v-card-text>
                    <v-card-text>centre for gifted healthcare workers</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!--clinics-->
    <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color="primary">
                  <v-img src="/clinics/clinic1.jpg" cover></v-img>
                <v-card-title> Laboratory Service</v-card-title>
                <v-card-text>Some text about the lab</v-card-text>
                <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

         
           

            <v-col md="3">
                <v-card width="300px" color="primary">
                  <v-img src="/clinics/clinic2.jpg" cover></v-img>
                <v-card-title> dental Service</v-card-title>
                <v-card-text>Some text about the lab</v-card-text>
                <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                  <v-img src="/clinics/clinic3.jpg" cover></v-img>
                <v-card-title> Maternity Service</v-card-title>
                <v-card-text>Some text about the lab</v-card-text>
                <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                  <v-img src="/clinics/clinic4.jpg" cover></v-img>
                <v-card-title> Xray Service</v-card-title>
                <v-card-text>Some text about the lab</v-card-text>
                <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
    <!-- Footer -->
     <v-container max-width="100%" class="mt-6 bg-secondary">
     <v-row>
        <v-col md="4">
        <v-card height="300px" color="secondary" flat>
            <v-card-title>subscribe to our mailing list</v-card-title>
            <v-card-text>Get the latest news,health tips and hospital updates</v-card-text>
            <v-text-field v-model="inputvalue" label="Email addres" outlined class="ma-4">
            <template v-slot:append-inner>
                <v-btn color="primary">subscribe</v-btn>
            </template>
            </v-text-field>
            <div class="text-centre">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mid-facebook"></v-icon>
            </div>
        </v-card>
     </v-col>
     <v-col md="4">
        <v-card height="300px" color="secondary" flat>
            <v-card-title>contact information</v-card-title>
            <v-card-text>
                <p>
                    <v-icon icon="mdi-map-marker-radious-outline"></v-icon>
                    The Madaraka Hospital
                </p>
            <P> 123, Main Street Madaraka, Nairobi </p>
                <p>
                    <v-icon icon="mdi-phone-outline"></v-icon>
                    25471234567
                    </p>
                    <p>
                        <v-icon icon="mdi-email-outline"></v-icon>
                        info@madarakahospital.com
                    </p>
            </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card height="300px" color="=secondary" flat>
            <v-card-title> Quicklinks</v-card-title>
            <v-card-text>About us</v-card-text>
            <vcard-text>clinics</vcard-text>
            <v-card-text>Find a Doctor</v-card-text>
            <v-card-text>News and Events</v-card-text>
            </v-card>
        </v-col>

     </v-row>
</v-container>
</template>