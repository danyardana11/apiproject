<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {


        Schema::create('product', function (Blueprint $table) {
            $table->id();  
            $table->string('name');
            $table->string('title');
            $table->integer('price');
            $table->integer('discound')->default(0);   
            $table->integer('quantity')->default(0);
            $table->string("image");
            $table->string('filter_name'); // Foreign key column referencing 'name' column in 'filters' table
            $table->foreign('filter_name')->references('name')->on('filters')->onDelete('cascade');
            

         //   $table->foreignId('filter_id')->constrained('filters')->onDelete('cascade');

        }); 
    
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');

    }
};
