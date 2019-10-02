<?php
	
    function biodata() {

        

        $biodata = [
            'name' => 'alwan',
            'age' => 21,
            'address' => 'mayong, jepara',
            'hobbies' => ['football', 'badminton'],
            'is_maried' => false,
            'list_school' => (object) [
                'name' => 'smk gatoloco',
                'years_in' => 2013,
                'years_out' => 2016,
                'major' => 'tkj',
            ],
            'skills' => (object) [
                'skill' => 'football',
                'level' => 'advenced',

                'skill' => 'badminton',
                'level' => 'beginner',
            ],

            'interest_in_coding' => true

        ];

        echo json_encode($biodata);

    }


    biodata();

?>
